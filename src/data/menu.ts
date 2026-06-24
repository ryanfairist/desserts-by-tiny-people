export type Category = 'tea' | 'breads' | 'cupcakes' | 'cookies' | 'cake'

export type Treat = {
    id: number
    name: string
    description: string
    category: Category
    emoji: string
}

export const categories: { id:Category | 'all'; label: string }[] = [
    {id: 'all', label: 'All'},
    {id: 'tea', label: 'Teas'},
    {id: 'breads', label: 'Breads'},
    {id: 'cupcakes', label: 'Cupcakes'},
    {id: 'cookies', label: 'Cookies'},
    {id: 'cake', label: 'Cakes'},
]

export const treats: Treat[] = [
    {
        id: 1,
        name: 'Chamomile Tea',
        description: ' Freshly grown chamomile flowers steeped to with love',
        category: 'tea',
        emoji: '🍵',
    },
    {
        id:2,
        name: 'Garlic Herb Egg Bread',
        description: 'Tasty egg bread with soft inner bite to pull and eat',
        category: 'breads',
        emoji: '🍞',
    },
    {
        id:3,
        name: 'Apple White Cupcakes',
        description: ' Fuffly white cupcakes topped and stuffed with apple pie filling',
        category: 'cupcakes',
        emoji: '🧁',
    },
    {
        id:4,
        name: 'Strawberry Cookies',
        description: 'Soft brown sugar strawberry bite size cookies',
        category: 'cookies',
        emoji: '🍪',
    },
    {
        id:5,
        name: 'Chocolate Cake',
        description: 'Fluffy chocolate cake with fresh brewed coffe flavor and creamy buttercream icing',
        category: 'cake',
        emoji: '🍰',
    },
]