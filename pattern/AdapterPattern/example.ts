/**
 * The Target defines the domain-specific interface used by the client code.
 */
 class Target {
    public request(): string {
        return 'Target: The default target\'s behavior.';
    }
}

/**
 * The Adoptee contains some useful behavior, but its interface is incompatible
 * with the existing client code. The Adoptee needs some adaptation before the
 * client code can use it.
 */
class Adoptee {
    public specificRequest(): string {
        return '.eetpadA eht fo roivaheb laicepS';
    }
}

/**
 * The Adapter makes the Adoptee's interface compatible with the Target's
 * interface.
 */
class Adapter extends Target {
    private adoptee: Adoptee;

    constructor(adoptee: Adoptee) {
        super();
        this.adoptee = adoptee;
    }

    public request(): string {
        const result = this.adoptee.specificRequest().split('').reverse().join('');
        return `Adapter: (TRANSLATED) ${result}`;
    }
}

/**
 * The client code supports all classes that follow the Target interface.
 */
function clientCode(target: Target) {
    console.log(target.request());
}

export {clientCode, Adoptee, Adapter, Target}