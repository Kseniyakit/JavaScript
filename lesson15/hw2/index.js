export const createLogger = () => {

    const result = [];

    return {
        warn: text => {
            result.push({
                message: text,
                dateTime: new Date(),
                type: 'warn',

            })
        },

        error: text => {
            result.push({
                message: text,
                dateTime: new Date(),
                type: 'error',

            })
        },

        log: text => {
            result.push({
                message: text,
                dateTime: new Date(),
                type: 'log',

            })
        },

        getRecords: str => {
            if (!str || typeof str!= 'string') {
                return result.push({});
            } else {
                return result.filter(x => x.type == str)
                .sort((a,b) => b.dateTime - a.dateTime);
            }
        },
    }
};

