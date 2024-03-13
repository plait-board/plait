import { PlaitMind } from '@plait/mind';
import { PlaitDrawElement } from '@plait/draw';

export const mockMindData: PlaitMind[] = [
    {
        type: 'mindmap',
        id: '1',
        rightNodeCount: 3,
        data: { topic: { children: [{ text: '脑图调研' }] }, emojis: [{ name: '🏀' }, { name: '🌈' }] },
        children: [
            {
                id: '1-1',
                data: {
                    topic: { children: [{ text: '富文本' }] },
                    emojis: [{ name: '🤩' }, { name: '🤘' }],
                    image: {
                        url: 'https://atlas-rc.pingcode.com/files/public/5ffa68d453ffebf847cf49b9/origin-url',
                        width: 364,
                        height: 160
                    }
                },
                children: [],
                width: 42,
                height: 20
            },
            {
                id: '1-4',
                data: { topic: { children: [{ text: '知名脑图产品' }] } },
                children: [
                    {
                        id: '1-4-1',
                        data: { topic: { children: [{ text: '布局算法' }] } },
                        children: [],
                        width: 56,
                        height: 20
                    },
                    {
                        id: '1-4-2',
                        data: { topic: { children: [{ text: 'non-layerd-tidy-trees' }] } },
                        children: [
                            {
                                id: '1-4-2-1',
                                data: { topic: { children: [{ text: '鱼骨图哦' }] } },
                                children: [],
                                width: 56,
                                height: 20
                            },
                            {
                                id: '1-4-2-2',
                                data: { topic: { children: [{ text: '缩进布局' }] } },
                                children: [],
                                width: 56,
                                height: 20
                            }
                        ],
                        width: 144.8046875,
                        height: 20
                    },
                    {
                        id: '1-4-3',
                        data: { topic: { children: [{ text: '知名脑图产品' }] } },
                        children: [],
                        width: 84,
                        height: 20
                    }
                ],
                width: 84,
                height: 20
            },
            {
                id: '1-5',
                data: { topic: { children: [{ text: 'xxxxxxx' }] } },
                children: [
                    {
                        id: '1-5-1',
                        data: { topic: { children: [{ text: '鱼骨图哦' }] } },
                        children: [],
                        width: 56,
                        height: 20
                    },
                    {
                        id: '1-5-2',
                        data: { topic: { children: [{ text: '缩进布局' }] } },
                        children: [],
                        width: 56,
                        height: 20
                    }
                ],
                width: 48,
                height: 20
            }
        ],
        width: 72,
        height: 25,
        isRoot: true,
        points: [[560, 360]]
    }
];

export const mockDrawData: PlaitDrawElement[] = [
    {
        id: 'GMKAE',
        type: 'geometry',
        shape: 'terminal',
        angle: 0,
        opacity: 1,
        textHeight: 20,
        text: {
            children: [
                {
                    text: '结束'
                }
            ],
            align: 'center'
        },
        points: [
            [-107, 443.9999999999999],
            [13, 503.9999999999999]
        ],
        strokeWidth: 2
    },
    {
        id: 'WEycp',
        type: 'geometry',
        shape: 'process',
        angle: 0,
        opacity: 1,
        textHeight: 20,
        text: {
            children: [
                {
                    text: '过程'
                }
            ],
            align: 'center'
        },
        points: [
            [98, 283.9999999999999],
            [218, 343.9999999999999]
        ],
        strokeWidth: 2
    },
    {
        id: 'rJcaT',
        type: 'geometry',
        shape: 'decision',
        angle: 0,
        opacity: 1,
        textHeight: 20,
        text: {
            children: [
                {
                    text: '过程'
                }
            ],
            align: 'center'
        },
        points: [
            [-117, 278.9999999999999],
            [23, 348.9999999999999]
        ],
        strokeWidth: 2
    },
    {
        id: 'RpDPy',
        type: 'geometry',
        shape: 'process',
        angle: 0,
        opacity: 1,
        textHeight: 20,
        text: {
            children: [
                {
                    text: '过程'
                }
            ],
            align: 'center'
        },
        points: [
            [-107, 163.9999999999999],
            [13, 223.9999999999999]
        ],
        strokeWidth: 2
    },
    {
        id: 'xRzpF',
        type: 'geometry',
        shape: 'terminal',
        angle: 0,
        opacity: 1,
        textHeight: 20,
        text: {
            children: [
                {
                    text: '开始'
                }
            ],
            align: 'center'
        },
        points: [
            [-107, 48.999999999999886],
            [13, 108.99999999999989]
        ],
        strokeWidth: 2
    },
    {
        id: 'hhyEm',
        type: 'line',
        shape: 'elbow',
        source: {
            marker: 'none',
            connection: [0.5, 1],
            boundId: 'WEycp'
        },
        texts: [],
        target: {
            marker: 'arrow',
            connection: [1, 0.5],
            boundId: 'GMKAE'
        },
        opacity: 1,
        points: [
            [-277, -129.0000000000001],
            [-277, -129.0000000000001]
        ],
        strokeWidth: 2
    },
    {
        id: 'NQbHa',
        type: 'line',
        shape: 'elbow',
        source: {
            marker: 'none',
            connection: [1, 0.5],
            boundId: 'rJcaT'
        },
        texts: [
            {
                text: {
                    children: [
                        {
                            text: '否'
                        }
                    ]
                },
                position: 0.5,
                width: 14,
                height: 20
            }
        ],
        target: {
            marker: 'arrow',
            connection: [0, 0.5],
            boundId: 'WEycp'
        },
        opacity: 1,
        points: [
            [-277, -129.0000000000001],
            [-277, -129.0000000000001]
        ],
        strokeWidth: 2
    },
    {
        id: 'dBQka',
        type: 'line',
        shape: 'elbow',
        source: {
            marker: 'none',
            connection: [0.5, 1],
            boundId: 'rJcaT'
        },
        texts: [
            {
                text: {
                    children: [
                        {
                            text: '是'
                        }
                    ]
                },
                position: 0.5,
                width: 14,
                height: 20
            }
        ],
        target: {
            marker: 'arrow',
            connection: [0.5, 0],
            boundId: 'GMKAE'
        },
        opacity: 1,
        points: [
            [-277, -129.0000000000001],
            [-277, -129.0000000000001]
        ],
        strokeWidth: 2
    },
    {
        id: 'nTHrr',
        type: 'line',
        shape: 'elbow',
        source: {
            marker: 'none',
            connection: [0.5, 1],
            boundId: 'RpDPy'
        },
        texts: [],
        target: {
            marker: 'arrow',
            connection: [0.5, 0],
            boundId: 'rJcaT'
        },
        opacity: 1,
        points: [
            [-277, -129.0000000000001],
            [-277, -129.0000000000001]
        ],
        strokeWidth: 2
    },
    {
        id: 'PMShX',
        type: 'line',
        shape: 'elbow',
        source: {
            marker: 'none',
            connection: [0.5, 1],
            boundId: 'xRzpF'
        },
        texts: [],
        target: {
            marker: 'arrow',
            connection: [0.5, 0],
            boundId: 'RpDPy'
        },
        opacity: 1,
        points: [
            [-277, -129.0000000000001],
            [-277, -129.0000000000001]
        ],
        strokeWidth: 2
    }
] as PlaitDrawElement[];

export const mockGroupData: PlaitDrawElement[] = [
    {
        id: 'group1',
        type: 'group'
    },
    {
        id: 'group2',
        type: 'group',
        groupId: 'group3'
    },
    {
        id: 'group3',
        type: 'group'
    },
    {
        id: 'jimNt',
        type: 'geometry',
        shape: 'rectangle',
        angle: 0,
        opacity: 1,
        textHeight: 20,
        groupId: 'group1',
        text: {
            children: [
                {
                    text: 'group1'
                }
            ],
            align: 'center'
        },
        points: [
            [-98.814453125, 66.53125],
            [55.880859375, 126.71875]
        ],
        strokeWidth: 2,
        fill: '#e48483'
    },
    {
        id: 'bRBzf',
        type: 'geometry',
        shape: 'rectangle',
        angle: 0,
        opacity: 1,
        textHeight: 20,
        groupId: 'group1',
        text: {
            children: [
                {
                    text: 'group1'
                }
            ],
            align: 'center'
        },
        points: [
            [136.806640625, 66.53125],
            [291.501953125, 126.71875]
        ],
        strokeWidth: 2,
        fill: '#e48483'
    },
    {
        id: 'erasy',
        type: 'geometry',
        shape: 'rectangle',
        angle: 0,
        opacity: 1,
        textHeight: 20,
        groupId: 'group3',
        text: {
            children: [
                {
                    text: 'group3'
                }
            ],
            align: 'center'
        },
        points: [
            [19.580078125, 318.6376953125],
            [174.275390625, 378.8251953125]
        ],
        strokeWidth: 2,
        fill: '#69b1e4'
    },
    {
        id: 'YcTFs',
        type: 'geometry',
        shape: 'text',
        angle: 0,
        opacity: 1,
        textHeight: 20,
        text: {
            children: [
                {
                    text: 'group3 包含 group2'
                }
            ]
        },
        points: [
            [-275.482421875, 302.318359375],
            [-138.091796875, 322.318359375]
        ],
        autoSize: true
    },
    {
        id: 'ztmWw',
        type: 'geometry',
        shape: 'rectangle',
        angle: 0,
        opacity: 1,
        textHeight: 20,
        groupId: 'group2',
        text: {
            children: [
                {
                    text: 'group2'
                }
            ],
            align: 'center'
        },
        points: [
            [-98.814453125, 197.279296875],
            [55.880859375, 257.466796875]
        ],
        strokeWidth: 2,
        fill: '#e48483'
    },
    {
        id: 'bWiPp',
        type: 'geometry',
        shape: 'rectangle',
        angle: 0,
        opacity: 1,
        textHeight: 20,
        groupId: 'group2',
        text: {
            children: [
                {
                    text: 'group2'
                }
            ],
            align: 'center'
        },
        points: [
            [139.3486328125, 197.279296875],
            [294.0439453125, 257.466796875]
        ],
        strokeWidth: 2,
        fill: '#e48483'
    }
] as PlaitDrawElement[];

export const mockRotateData: PlaitDrawElement[] = [
    {
        id: 'FjKbf',
        type: 'geometry',
        shape: 'text',
        angle: 5.86874495248496,
        opacity: 1,
        textHeight: 30,
        text: {
            children: [
                {
                    text: '文本测试',
                    'font-size': 20
                }
            ]
        },
        points: [
            [-1530.898193359375, 164.9169921875],
            [-1437.683349609375, 201.4208984375]
        ],
        autoSize: false
    },
    {
        id: 'Ejnnf',
        type: 'geometry',
        shape: 'rectangle',
        angle: 5.86874495248496,
        opacity: 1,
        textHeight: 20,
        text: {
            children: [
                {
                    text: ''
                }
            ],
            align: 'center'
        },
        points: [
            [-285.984375, 361.66845703125],
            [-4.35546875, 474.97705078125]
        ],
        strokeWidth: 2
    },
    {
        id: 'tARBe',
        type: 'geometry',
        shape: 'rectangle',
        angle: 5.86874495248496,
        opacity: 1,
        textHeight: 20,
        text: {
            children: [
                {
                    text: ''
                }
            ],
            align: 'center'
        },
        points: [
            [-245.51953125, 543.79248046875],
            [95.875, 624.54638671875]
        ],
        strokeWidth: 2
    },
    {
        id: 'JaNyh',
        type: 'geometry',
        shape: 'ellipse',
        angle: 6.86874495248496,
        opacity: 1,
        textHeight: 20,
        text: {
            children: [
                {
                    text: ''
                }
            ],
            align: 'center'
        },
        points: [
            [-533.3525390625, 128.17773437499994],
            [-337.2041015625, 226.22460937499994]
        ],
        strokeWidth: 2
    },
    {
        id: 'FHknH',
        type: 'geometry',
        shape: 'triangle',
        angle: 4.86874495248496,
        opacity: 1,
        textHeight: 20,
        text: {
            children: [
                {
                    text: ''
                }
            ],
            align: 'center'
        },
        points: [
            [-782.08349609375, 86.6845703125],
            [-688.86865234375, 233.2626953125]
        ],
        strokeWidth: 2
    },
    {
        id: 'axRKz',
        type: 'geometry',
        shape: 'rectangle',
        angle: 5.86874495248496,
        opacity: 1,
        textHeight: 20,
        text: {
            children: [
                {
                    text: ''
                }
            ],
            align: 'center'
        },
        points: [
            [-1311.2099609375, 146.718994140625],
            [-917.285014484772, 306.13338010187175]
        ],
        strokeWidth: 2
    },
    {
        id: 'sZzjB',
        type: 'image',
        angle: 5.86874495248496,
        points: [
            [-1094.410016442224, 410.4649548597526],
            [-625.7626953125, 722.8965022795687]
        ],
        url: 'blob:http://localhost:7100/002b0121-5e05-4b84-8ef4-c69b2d408dff'
    }
] as PlaitDrawElement[];
