const  INCOME_CATEGORIES = {
    salary: "Зароботная плата",
    cashback: "Кэшбек",
    deposit: "Вклад"
};

const EXPENSE_CATEGORIES = {
    products: "Продукты",
    services: "Коммунальные услуги",
    car: "Автомобиль",
    health: "Здоровье"
};

const CATEGORIES = {...INCOME_CATEGORIES, ...EXPENSE_CATEGORIES};

export {
    INCOME_CATEGORIES,
    EXPENSE_CATEGORIES,
    CATEGORIES
}