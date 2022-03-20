const useGenre = (selectedGenre) => {
    if (selectedGenre.length < 1) return "";

    const GenreId = selectedGenre.map((g) => g.id);
    return GenreId.reduce((acc, curr) => acc + " " + curr);
};

export default useGenre;