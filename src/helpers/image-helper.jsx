export const getTrophyImage = (id) => {
    return `${process.env.NEXT_PUBLIC_IMAGES}/trofeos/${id}.png`;
};

export const getTeamImageById = (id, size, height) => {
    const addWidth = `?width=${size ?? teamSize}&height=${height ?? size ?? teamSize}`;
    return `${process.env.NEXT_PUBLIC_IMAGES}/equipos/${id}.png${addWidth}`;
};
