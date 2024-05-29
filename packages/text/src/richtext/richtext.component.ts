import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    HostBinding,
    Input,
    OnChanges,
    OnInit,
    Output,
    Renderer2,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import { isKeyHotkey } from 'is-hotkey';
import { Element, Text, Transforms, createEditor } from 'slate';
import { AngularEditor, SlateEditable, withAngular } from 'slate-angular';
import { withHistory } from 'slate-history';
import { CLIPBOARD_FORMAT_KEY } from '../constant';
import { MarkTypes } from '../constant/mark';
import { LinkElement } from '../custom-types';
import { PlaitLinkNodeComponent } from '../plugins/link/link.component';
import { withLink } from '../plugins/link/with-link';
import { withMark } from '../plugins/mark/with-marks';
import { ParagraphElementComponent } from '../plugins/paragraph/paragraph.component';
import { PlaitTextEditor } from '../plugins/text.editor';
import { withSelection } from '../plugins/with-selection';
import { withSingleLine } from '../plugins/with-single';
import { PlaitTextNodeComponent } from '../text-node/text.component';
import { FormsModule } from '@angular/forms';
import { measureDivSize } from '../utils/text-size';
import { TextData, TextPlugin } from '@plait/common';

@Component({
    selector: 'plait-richtext',
    templateUrl: './richtext.component.html',
    standalone: true,
    imports: [SlateEditable, FormsModule]
})
export class PlaitRichtextComponent implements OnInit, AfterViewInit, OnChanges {
    _readonly = true;

    @HostBinding('class') hostClass = 'plait-richtext-container';

    children: Element[] = [];

    @Input() textPlugins: TextPlugin[] = [];

    @Input() set text(text: Element) {
        this.children = [text];
        this.cdr.markForCheck();
    }

    @Input() set readonly(value: boolean) {
        this._readonly = value;
    };

    @ViewChild('slateEditable')
    slateEditable!: SlateEditable;

    @Input()
    onChange!: (data: TextData) => void;

    @Output()
    onComposition: EventEmitter<CompositionEvent> = new EventEmitter();

    editor = withSelection(withLink(withMark(withSingleLine(withHistory(withAngular(createEditor(), CLIPBOARD_FORMAT_KEY))))));

    nativeElement() {
        return this.elementRef.nativeElement;
    }

    constructor(public renderer2: Renderer2, private cdr: ChangeDetectorRef, public elementRef: ElementRef<HTMLElement>) {}

    valueChange() {
        const { width, height } = this.getSize();
        this.onChange({ newText: this.editor.children[0] as Element, width, height });
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }

    getSize() {
        const editor = this.editor;
        // TODO rotate
        // const transformMatrix = this.g.getAttribute('transform');
        // this.g.setAttribute('transform', '');
        const paragraph = AngularEditor.toDOMNode(editor, editor.children[0]);
        const { width, height } = measureDivSize(paragraph);
        // if (transformMatrix) {
        //     this.g.setAttribute('transform', transformMatrix);
        // }
        return { width, height };
    }

    ngOnInit(): void {
        this.textPlugins.forEach(plugin => {
            plugin(this.editor);
        });
    }

    ngAfterViewInit(): void {}

    renderElement = (element: Element) => {
        const render = ((this.editor as unknown) as PlaitTextEditor)?.renderElement;
        if (render && render(element)) {
            return render(element);
        }

        if ((element as LinkElement).type === 'link') {
            return PlaitLinkNodeComponent;
        }

        return ParagraphElementComponent;
    };

    renderText: any = (text: Text): PlaitTextNodeComponent | null => {
        for (const key in MarkTypes) {
            if ((text as any)[(MarkTypes as any)[key]]) {
                return PlaitTextNodeComponent as any;
            }
        }
        return null;
    };

    compositionStart = (event: CompositionEvent) => {
        this.onComposition.emit(event);
    };

    compositionUpdate = (event: CompositionEvent) => {
        this.onComposition.emit(event);
    };

    compositionEnd = (event: CompositionEvent) => {
        this.onComposition.emit(event);
    };

    onKeydown = (event: KeyboardEvent) => {
        if (isKeyHotkey('mod+a', event)) {
            Transforms.select(this.editor, [0]);
            event.preventDefault();
        }
        this.editor.onKeydown(event);
    };
}
