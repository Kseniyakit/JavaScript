export const createLogger = () => {

    const result = [];

    return {
        warn: string => {
            result.push({
                message: string,
                dateTime: new Date(),
                type: 'warn',

            })
        },

        error: string => {
            result.push({
                message: string,
                dateTime: new Date(),
                type: 'error',

            })
        },

        log: string => {
            result.push({
                message: string,
                dateTime: new Date(),
                type: 'log',

            })
        },

        getRecords: str => {
            if (!str || typeof str!= 'string') {
                return result.sort((a, b) => b.dateTime - a.dateTime);
            } else {
                return result.filter(x => x.type == str)
                .sort((a,b) => b.dateTime - a.dateTime);
            }
        },
    }
};

