export const empTypeConverter = (type) => {
    const types = {
        'waste' : "Отходы",
        'machinery': 'Транспорт',
        'cargo': 'Грузоперевозки'
    }
    return types[type]
}