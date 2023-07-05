const register = (info?: {name: string, value?: number}) => {
    console.log(`The record's name is ${info!.name}.`);    
};

register({name: "Honda Civic"});