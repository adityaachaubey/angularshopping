//----------------------------------------------------------------
// product class
function product(sku, name, description, price, cal, carot, vitc, folate, potassium, fiber) {
    this.sku = sku; //(stock keeping unit)
    this.name = name;
    this.description = description;
    this.price = price;
    this.cal = cal;
    this.nutrients = {
        "Carotenoid": carot,
        "Vitamin C": vitac,
        "Folates": folate,
        "Potassium": potassium,
        "Fiber": fiber
    };
}
