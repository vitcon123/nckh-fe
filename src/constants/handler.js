const convertTimeStampToLocalDate = (unixTime) => {
    const date = new Date(unixTime);

    date.setHours(date.getHours() + 7);
    return date.toISOString();
};

const getLabIdFromPath = (path) => {
    const pathParts = path.split('/');
    const labId = parseInt(pathParts[pathParts.length - 1]);
    return labId;
};

export { convertTimeStampToLocalDate, getLabIdFromPath };
