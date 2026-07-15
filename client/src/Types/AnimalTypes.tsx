export type AnimalType = {
    id?: number,
    img: string,
    name: string,
    info: string,
    endangered_level: "Least Concern" | "Never Threatened" | "Vulnerable" | "Endangered" | "Critically Endangered",
    animal_type: "Big Cats" | "Large Mammals" | "Antelope" | "Primates" | "Birds" | "Reptiles" | "Carnivores",
    big_five: Boolean
}

export type AnimalProfileType = {
    onClose: () => void
} & AnimalType