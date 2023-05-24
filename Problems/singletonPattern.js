// Singleton is a creational design pattern that lets you 
// ensure that a class has only one instance, while providing a global access point to this instance.
// Ensure that a class has just a single instance.
// Provide a global access point to that instance
// ==>Use Cases<===
// Use the Singleton pattern when a class in your program should have just a single instance available to all clients
//=> for example, a single database object shared by different parts of the program.
//=>  The Singleton pattern disables all other means of creating objects of a class except for the special creation method. This method either creates a new object or returns an existing one if it has already been created.
//=>  Use the Singleton pattern when you need stricter control over global variables.


/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
 class Singleton {
     static instance;

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
     constructor() { }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    /**
     * Finally, any singleton should define some business logic, which can be
     * executed on its instance.
     */
    someBusinessLogic() {
        // ...
    }
}

/**
 * The client code.
 */
function clientCode() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

clientCode();