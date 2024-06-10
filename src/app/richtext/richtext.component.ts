import { Component } from '@angular/core';
import { Editor } from 'slate';
import { PlaitTextComponent } from '../../../packages/angular-text/src/text/text.component';

@Component({
    selector: 'app-basic-richtext',
    templateUrl: './richtext.component.html',
    standalone: true,
    imports: [PlaitTextComponent]
})
export class BasicRichtextComponent {
    value = {
        children: [{ text: '富文本' }]
    };
    onChange(event: Editor) {
        console.log(event);
    }
}
