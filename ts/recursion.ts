//Есть рекурсивное меню:

const list = [
    {
        title: 'Животные',
        items: [
            {
                title: 'Млекопитающие',
                items: [
                    { title: 'Коровы' },
                    { title: 'Ослы' },
                    { title: 'Собаки' },
                    { title: 'Тигры' },
                ],
            },
        ],
    },
];

//Его тип и функцию построения можно описать так:
interface IListItem {
    readonly title: string;
    readonly items?: IListItem[];
}

function generateMenu(list: IListItem[]): string {
    let output: string = '<ul>';
    for (const item of list) {
        const items: IListItem[] | undefined = item.items;
        output += `<li><a class=${items ? 'title' : ''}>${item.title}</a>`;
        if (items) {
            output += generateMenu(items);
        }
        output += '</li>';
    }
    output += '</ul>';
    return output;
}
