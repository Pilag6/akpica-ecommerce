const filterAndShuffle = (products, categories) => {
    const filteredProducts = products.filter((item) => {
        return categories.some((category) =>
            item.category.toLowerCase().startsWith(category)
        );
    });

    const shuffledProducts = [...filteredProducts].sort(
        () => 0.5 - Math.random()
    );

    return shuffledProducts;
};

export default filterAndShuffle;
