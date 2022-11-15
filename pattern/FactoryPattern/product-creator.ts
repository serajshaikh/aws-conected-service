interface Button {
    paint: () => void;
  }
  
  class MacOSButton implements Button {
    public paint(): void {
      console.log("You have created MacOSButton");
    }
  }
  
  class WindowsButton implements Button {
    public paint(): void {
      console.log("You have created WindowsButton");
    }
  }
  
  
  interface Checkbox {
    paint: () => void;
  }
  
  class MacOSCheckbox implements Checkbox {
    public paint(): void {
      console.log("You have created MacOSCheckbox");
    }
  }
  
  class WindowsCheckbox implements Checkbox {
    public paint(): void {
      console.log("You have created WindowsCheckbox");
    }
  }
  
  
  interface GUIFactory {
    createButton: () => Button;
    createCheckbox: () => Checkbox;
  }
  class MacOSFactory implements GUIFactory {
    public createButton(): Button {
      return new MacOSButton();
    }
    public createCheckbox(): Checkbox {
      return new MacOSCheckbox();
    }
  
  }
  class WindowsFactory implements GUIFactory {
    public createButton(): Button {
      return new WindowsButton();
    }
    public createCheckbox(): Checkbox {
      return new WindowsCheckbox();
    }
  }
  
  
  export class Application {
    private button: Button;
    private checkbox: Checkbox;
  
    public constructor(factory: MacOSFactory | WindowsFactory) {
      this.button = factory.createButton();
      this.checkbox = factory.createCheckbox();
    }
    public paint(): void {
      this.button.paint();
      this.checkbox.paint();
    }
  }
  
  
  export class Demo {
    public static configureApplication(val:string): Application {
      if (val === "mac") {
        return new Application(new MacOSFactory())
      } else {
        return new Application(new WindowsFactory())
      }
    }
  }
  
