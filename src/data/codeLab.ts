export interface CodeLabEntry {
  id: string;
  group: "solid" | "pattern";
  badge: string;
  title: string;
  fileName: string;
  summary: string;
  keyPoints: string[];
  code: string;
  terminalCommand: string;
  terminalOutput: string[];
}

export const codeLabEntries: CodeLabEntry[] = [
  {
    id: "srp",
    group: "solid",
    badge: "S",
    title: "Single Responsibility Principle",
    fileName: "SingleResponsibility.ts",
    summary:
      "A class should have exactly one reason to change. Bundle unrelated jobs into one class and every change — a new tax rule, a new export format — risks breaking something unrelated.",
    keyPoints: [
      "Ask 'who would ask me to change this class, and why?' — more than one answer means it has more than one responsibility.",
      "Split by axis of change, not by file size — a 20-line class can still violate SRP.",
      "Composition over a god class: let smaller classes collaborate instead of one class knowing everything.",
    ],
    code: `/**
 * Single Responsibility Principle
 * A class should have one, and only one, reason to change.
 */

// Violation: this class calculates, formats, AND persists an invoice.
// A pricing change, a print-format change, and a storage-engine change
// all force edits to the same class.
class Invoice {
  constructor(private items: { price: number; qty: number }[]) {}

  calculateTotal(): number {
    return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  printReceipt(): string {
    return "Total: $" + this.calculateTotal().toFixed(2);
  }

  saveToDatabase(): void {
    // direct database access mixed into a pricing class
    console.log("INSERT INTO invoices ...");
  }
}

// Fix: split responsibilities into focused collaborators.
interface InvoiceItem {
  price: number;
  qty: number;
}

class InvoiceCalculator {
  static total(items: InvoiceItem[]): number {
    return items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }
}

class InvoicePrinter {
  static receipt(total: number): string {
    return "Total: $" + total.toFixed(2);
  }
}

class InvoiceRepository {
  save(total: number): void {
    console.log("INSERT INTO invoices (total) VALUES (" + total + ")");
  }
}

// Each class now changes for exactly one reason.
const items: InvoiceItem[] = [{ price: 25, qty: 2 }];
const total = InvoiceCalculator.total(items);
new InvoiceRepository().save(total);
console.log(InvoicePrinter.receipt(total));
`,
    terminalCommand: "ts-node SingleResponsibility.ts",
    terminalOutput: [
      "INSERT INTO invoices (total) VALUES (50)",
      "Total: $50.00",
      "",
      "✓ InvoiceCalculator, InvoicePrinter, and InvoiceRepository",
      "  can now change independently without touching each other.",
    ],
  },
  {
    id: "ocp",
    group: "solid",
    badge: "O",
    title: "Open/Closed Principle",
    fileName: "OpenClosed.ts",
    summary:
      "Software entities should be open for extension but closed for modification. New behavior should be added by adding new code, not editing tested code.",
    keyPoints: [
      "A switch/if-else chain that grows with every new case is the classic OCP smell.",
      "Program to an interface, then add new implementations instead of new branches.",
      "This is what makes plugin systems, payment gateways, and pricing rules safe to extend under load.",
    ],
    code: `/**
 * Open/Closed Principle
 * Open for extension, closed for modification.
 */

// Violation: every new discount type means editing this function again,
// re-testing every branch that already worked.
function calculateDiscountBad(type: string, amount: number): number {
  if (type === "student") return amount * 0.9;
  if (type === "senior") return amount * 0.85;
  if (type === "employee") return amount * 0.8;
  // ...a new discount tier means another edit here
  return amount;
}

// Fix: define an extension point, then extend without touching it.
interface DiscountStrategy {
  apply(amount: number): number;
}

class StudentDiscount implements DiscountStrategy {
  apply(amount: number): number {
    return amount * 0.9;
  }
}

class SeniorDiscount implements DiscountStrategy {
  apply(amount: number): number {
    return amount * 0.85;
  }
}

class EmployeeDiscount implements DiscountStrategy {
  apply(amount: number): number {
    return amount * 0.8;
  }
}

class PriceCalculator {
  constructor(private strategy: DiscountStrategy) {}

  total(amount: number): number {
    return this.strategy.apply(amount);
  }
}

// Adding "loyalty" tier tomorrow costs one new class, zero edits below.
const calculator = new PriceCalculator(new EmployeeDiscount());
console.log(calculator.total(200));
`,
    terminalCommand: "ts-node OpenClosed.ts",
    terminalOutput: [
      "160",
      "",
      "✓ New discount tiers are added as new classes —",
      "  PriceCalculator and existing strategies stay untouched.",
    ],
  },
  {
    id: "lsp",
    group: "solid",
    badge: "L",
    title: "Liskov Substitution Principle",
    fileName: "LiskovSubstitution.ts",
    summary:
      "Objects of a subclass should be replaceable with objects of the base class without breaking correctness. If a subtype has to change the caller's assumptions, it's the wrong subtype.",
    keyPoints: [
      "If a subclass throws, no-ops, or overrides behavior the base class promised, it violates LSP even if it compiles fine.",
      "The classic tell: 'Square extends Rectangle' breaks the moment width and height are set independently.",
      "Prefer composition or a shared interface over inheritance when 'is-a' doesn't hold in every case.",
    ],
    code: `/**
 * Liskov Substitution Principle
 * Subtypes must be usable anywhere their base type is expected.
 */

// Violation: Square "is-a" Rectangle mathematically, but not behaviorally —
// setting width on a Square silently changes its height too, breaking
// any code that assumed setWidth/setHeight are independent.
class RectangleBad {
  constructor(protected width: number, protected height: number) {}
  setWidth(w: number) { this.width = w; }
  setHeight(h: number) { this.height = h; }
  area(): number { return this.width * this.height; }
}

class SquareBad extends RectangleBad {
  setWidth(w: number) { this.width = w; this.height = w; }
  setHeight(h: number) { this.width = h; this.height = h; }
}

// A caller relying on Rectangle's contract gets a surprise:
function resizeAndCheck(rect: RectangleBad) {
  rect.setWidth(5);
  rect.setHeight(4);
  console.log(rect.area()); // expected 20, Square silently gives 16
}

// Fix: model the real relationship — both are Shapes, neither is the other.
interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  area(): number { return this.width * this.height; }
}

class Square implements Shape {
  constructor(private side: number) {}
  area(): number { return this.side * this.side; }
}

const shapes: Shape[] = [new Rectangle(5, 4), new Square(4)];
shapes.forEach((shape) => console.log(shape.area()));
`,
    terminalCommand: "ts-node LiskovSubstitution.ts",
    terminalOutput: [
      "20",
      "16",
      "",
      "✓ Every Shape honors the same contract —",
      "  no subtype quietly breaks the caller's assumptions.",
    ],
  },
  {
    id: "isp",
    group: "solid",
    badge: "I",
    title: "Interface Segregation Principle",
    fileName: "InterfaceSegregation.ts",
    summary:
      "No client should be forced to depend on methods it doesn't use. Fat interfaces force fake implementations; split them by what each client actually needs.",
    keyPoints: [
      "A method body that throws 'not supported' is a strong signal the interface is too big.",
      "Many small, role-based interfaces compose better than one large interface.",
      "This keeps mocks and tests honest — you can't stub a method you were never asked to implement.",
    ],
    code: `/**
 * Interface Segregation Principle
 * Clients shouldn't depend on methods they don't use.
 */

// Violation: one fat interface forces RobotWorker to implement eat(),
// which makes no sense for a robot.
interface WorkerBad {
  work(): void;
  eat(): void;
}

class RobotWorkerBad implements WorkerBad {
  work(): void { console.log("Robot welding..."); }
  eat(): void { throw new Error("Robots do not eat"); }
}

// Fix: split by role. Implement only what applies.
interface Workable {
  work(): void;
}

interface Feedable {
  eat(): void;
}

class HumanWorker implements Workable, Feedable {
  work(): void { console.log("Human coding..."); }
  eat(): void { console.log("Human on lunch break"); }
}

class RobotWorker implements Workable {
  work(): void { console.log("Robot welding..."); }
}

function runShift(worker: Workable) {
  worker.work();
}

runShift(new HumanWorker());
runShift(new RobotWorker());
`,
    terminalCommand: "ts-node InterfaceSegregation.ts",
    terminalOutput: [
      "Human coding...",
      "Robot welding...",
      "",
      "✓ RobotWorker never has to implement a method",
      "  that doesn't apply to it.",
    ],
  },
  {
    id: "dip",
    group: "solid",
    badge: "D",
    title: "Dependency Inversion Principle",
    fileName: "DependencyInversion.ts",
    summary:
      "High-level modules shouldn't depend on low-level modules — both should depend on abstractions. This is what makes a service swappable and testable without touching its callers.",
    keyPoints: [
      "If a service instantiates its own dependency with `new`, it owns a concrete choice it shouldn't have to make.",
      "Inject the abstraction through the constructor; let the composition root decide the concrete type.",
      "This is the difference between 'add a mock' and 'rewrite the class' when writing unit tests.",
    ],
    code: `/**
 * Dependency Inversion Principle
 * Depend on abstractions, not concrete implementations.
 */

// Violation: NotificationService is welded to EmailSender.
// Swapping in SMS or push notifications means editing this class,
// and unit-testing it means actually sending an email.
class EmailSenderBad {
  send(message: string): void {
    console.log("Emailing: " + message);
  }
}

class NotificationServiceBad {
  private sender = new EmailSenderBad();
  notify(message: string): void {
    this.sender.send(message);
  }
}

// Fix: depend on an abstraction, inject the concrete implementation.
interface MessageSender {
  send(message: string): void;
}

class EmailSender implements MessageSender {
  send(message: string): void {
    console.log("Emailing: " + message);
  }
}

class SmsSender implements MessageSender {
  send(message: string): void {
    console.log("Texting: " + message);
  }
}

class NotificationService {
  constructor(private sender: MessageSender) {}
  notify(message: string): void {
    this.sender.send(message);
  }
}

// The composition root decides the concrete type — the service doesn't care.
new NotificationService(new EmailSender()).notify("Deploy finished");
new NotificationService(new SmsSender()).notify("Deploy finished");
`,
    terminalCommand: "ts-node DependencyInversion.ts",
    terminalOutput: [
      "Emailing: Deploy finished",
      "Texting: Deploy finished",
      "",
      "✓ NotificationService never imports a concrete sender —",
      "  swapping channels means zero edits to this class.",
    ],
  },
  {
    id: "singleton",
    group: "pattern",
    badge: "①",
    title: "Singleton",
    fileName: "Singleton.ts",
    summary:
      "Ensures a class has exactly one instance and provides a global access point to it — useful for shared config or a connection pool, dangerous as a substitute for dependency injection.",
    keyPoints: [
      "Use it for genuinely single, expensive-to-create resources: a config loader, a connection pool.",
      "Hidden global state makes unit tests order-dependent — inject the instance rather than reaching for the singleton inside business logic.",
      "In most backend codebases, a DI container's 'singleton lifetime' beats a hand-rolled Singleton class.",
    ],
    code: `/**
 * Singleton
 * Guarantees a single instance behind a global access point.
 */

class ConfigManager {
  private static instance: ConfigManager;
  private settings: Record<string, string> = {};

  // Private constructor blocks "new ConfigManager()" from outside.
  private constructor() {
    this.settings = { region: "ap-southeast-3", logLevel: "info" };
  }

  static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }

  get(key: string): string | undefined {
    return this.settings[key];
  }

  set(key: string, value: string): void {
    this.settings[key] = value;
  }
}

const configA = ConfigManager.getInstance();
configA.set("logLevel", "debug");

const configB = ConfigManager.getInstance();
console.log(configB.get("logLevel")); // sees configA's change
console.log(configA === configB);
`,
    terminalCommand: "ts-node Singleton.ts",
    terminalOutput: [
      "debug",
      "true",
      "",
      "✓ Both references point at the same instance —",
      "  useful for shared config, risky for anything you need to mock.",
    ],
  },
  {
    id: "factory",
    group: "pattern",
    badge: "②",
    title: "Factory Method",
    fileName: "FactoryMethod.ts",
    summary:
      "Defers object creation to a dedicated method so callers depend on an interface, not on which concrete class gets constructed.",
    keyPoints: [
      "Callers never call `new SpecificGateway()` directly — they ask a factory for 'the gateway for this payment type.'",
      "New gateway types are added by extending the factory, not by touching every call site that creates one.",
      "Pairs naturally with Dependency Inversion — the factory returns an interface, not a concrete class.",
    ],
    code: `/**
 * Factory Method
 * Centralize object creation behind a single creation point.
 */

interface PaymentGateway {
  charge(amountCents: number): void;
}

class StripeGateway implements PaymentGateway {
  charge(amountCents: number): void {
    console.log("Stripe charging " + amountCents + " cents");
  }
}

class MidtransGateway implements PaymentGateway {
  charge(amountCents: number): void {
    console.log("Midtrans charging " + amountCents + " cents");
  }
}

type GatewayType = "stripe" | "midtrans";

class PaymentGatewayFactory {
  static create(type: GatewayType): PaymentGateway {
    switch (type) {
      case "stripe":
        return new StripeGateway();
      case "midtrans":
        return new MidtransGateway();
    }
  }
}

function checkout(type: GatewayType, amountCents: number) {
  const gateway = PaymentGatewayFactory.create(type);
  gateway.charge(amountCents);
}

checkout("stripe", 2500);
checkout("midtrans", 1500);
`,
    terminalCommand: "ts-node FactoryMethod.ts",
    terminalOutput: [
      "Stripe charging 2500 cents",
      "Midtrans charging 1500 cents",
      "",
      "✓ checkout() never mentions a concrete gateway class —",
      "  adding a new provider only touches the factory.",
    ],
  },
  {
    id: "strategy",
    group: "pattern",
    badge: "③",
    title: "Strategy",
    fileName: "Strategy.ts",
    summary:
      "Encapsulates interchangeable algorithms behind a common interface so behavior can be selected — or swapped at runtime — without conditional logic in the caller.",
    keyPoints: [
      "If you see a switch statement selecting behavior, Strategy is usually the pattern hiding underneath it.",
      "Each strategy is independently testable in isolation from the class that uses it.",
      "Swapping strategy at runtime (e.g. by region or feature flag) needs no change to the consuming class.",
    ],
    code: `/**
 * Strategy
 * Swap the algorithm without touching the class that uses it.
 */

interface ShippingStrategy {
  cost(weightKg: number): number;
}

class StandardShipping implements ShippingStrategy {
  cost(weightKg: number): number {
    return 5 + weightKg * 1.2;
  }
}

class ExpressShipping implements ShippingStrategy {
  cost(weightKg: number): number {
    return 12 + weightKg * 2.5;
  }
}

class FreeShippingOverThreshold implements ShippingStrategy {
  constructor(private thresholdKg: number) {}
  cost(weightKg: number): number {
    return weightKg >= this.thresholdKg ? 0 : 5 + weightKg * 1.2;
  }
}

class ShippingCalculator {
  constructor(private strategy: ShippingStrategy) {}
  quote(weightKg: number): number {
    return this.strategy.cost(weightKg);
  }
}

const calculator = new ShippingCalculator(new ExpressShipping());
console.log(calculator.quote(3));
`,
    terminalCommand: "ts-node Strategy.ts",
    terminalOutput: [
      "19.5",
      "",
      "✓ ShippingCalculator has no idea which strategy it holds —",
      "  new shipping rules ship as new classes, not new branches.",
    ],
  },
  {
    id: "observer",
    group: "pattern",
    badge: "④",
    title: "Observer",
    fileName: "Observer.ts",
    summary:
      "Lets one-to-many dependents react to a subject's state change without the subject knowing anything about them — the backbone of event-driven systems and pub/sub.",
    keyPoints: [
      "The subject only knows the Observer interface, never the concrete listeners subscribed to it.",
      "This is the same shape as event-driven microservices: a publisher emits, consumers react independently.",
      "Watch for memory leaks — always provide an unsubscribe path for long-lived subjects.",
    ],
    code: `/**
 * Observer
 * Notify many dependents without coupling the subject to any of them.
 */

interface OrderObserver {
  onOrderStatusChanged(orderId: string, status: string): void;
}

class OrderStatusPublisher {
  private observers: OrderObserver[] = [];

  subscribe(observer: OrderObserver): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: OrderObserver): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  setStatus(orderId: string, status: string): void {
    for (const observer of this.observers) {
      observer.onOrderStatusChanged(orderId, status);
    }
  }
}

class EmailNotifier implements OrderObserver {
  onOrderStatusChanged(orderId: string, status: string): void {
    console.log("Email: order " + orderId + " is now " + status);
  }
}

class InventorySync implements OrderObserver {
  onOrderStatusChanged(orderId: string, status: string): void {
    if (status === "paid") console.log("Inventory: reserving stock for " + orderId);
  }
}

const publisher = new OrderStatusPublisher();
publisher.subscribe(new EmailNotifier());
publisher.subscribe(new InventorySync());
publisher.setStatus("ORD-1042", "paid");
`,
    terminalCommand: "ts-node Observer.ts",
    terminalOutput: [
      "Email: order ORD-1042 is now paid",
      "Inventory: reserving stock for ORD-1042",
      "",
      "✓ The publisher never imports EmailNotifier or InventorySync —",
      "  new listeners subscribe without changing the publisher.",
    ],
  },
  {
    id: "decorator",
    group: "pattern",
    badge: "⑤",
    title: "Decorator",
    fileName: "Decorator.ts",
    summary:
      "Attaches new behavior to an object at runtime by wrapping it, instead of subclassing every combination of feature you might need.",
    keyPoints: [
      "Each decorator implements the same interface it wraps, so decorators can be stacked in any order.",
      "This avoids the 'class explosion' of subclassing every feature combination (LoggingRetryCachedClient, RetryLoggingClient, ...).",
      "Common real-world uses: request logging, retry logic, and caching wrapped around an API client.",
    ],
    code: `/**
 * Decorator
 * Wrap an object to add behavior without subclassing it.
 */

interface ApiClient {
  request(path: string): Promise<string>;
}

class BaseApiClient implements ApiClient {
  async request(path: string): Promise<string> {
    return "response from " + path;
  }
}

class LoggingDecorator implements ApiClient {
  constructor(private inner: ApiClient) {}
  async request(path: string): Promise<string> {
    console.log("-> requesting " + path);
    const result = await this.inner.request(path);
    console.log("<- got response for " + path);
    return result;
  }
}

class RetryDecorator implements ApiClient {
  constructor(private inner: ApiClient, private maxAttempts: number) {}
  async request(path: string): Promise<string> {
    let lastError: unknown;
    for (let attempt = 1; attempt <= this.maxAttempts; attempt += 1) {
      try {
        return await this.inner.request(path);
      } catch (error) {
        lastError = error;
      }
    }
    throw lastError;
  }
}

// Stack decorators in any order — each one only knows the ApiClient interface.
const client: ApiClient = new LoggingDecorator(new RetryDecorator(new BaseApiClient(), 3));
client.request("/orders/1042").then((result) => console.log(result));
`,
    terminalCommand: "ts-node Decorator.ts",
    terminalOutput: [
      "-> requesting /orders/1042",
      "<- got response for /orders/1042",
      "response from /orders/1042",
      "",
      "✓ Retry and logging compose around BaseApiClient",
      "  without either decorator knowing about the other.",
    ],
  },
  {
    id: "adapter",
    group: "pattern",
    badge: "⑥",
    title: "Adapter",
    fileName: "Adapter.ts",
    summary:
      "Converts the interface of an existing class into one a client expects, so incompatible code — often a legacy SDK or a third-party API — can be used without changing either side.",
    keyPoints: [
      "The adapter is the only class that knows about the legacy API's shape — everything else depends on the target interface.",
      "Common at integration boundaries: wrapping a legacy payment SDK, an old logging library, or a third-party client with a different method signature.",
      "Unlike Decorator, Adapter changes the interface shape rather than adding behavior to the same one.",
    ],
    code: `/**
 * Adapter
 * Translate an incompatible interface into the one your code expects.
 */

// Legacy SDK: shape is fixed, can't be modified, and doesn't match
// the PaymentProcessor interface the rest of the codebase uses.
class LegacyPaymentSdk {
  makePayment(amountInCents: number, currencyCode: string): { ok: boolean; ref: string } {
    return { ok: true, ref: "legacy-" + amountInCents };
  }
}

// Target interface the rest of the application depends on.
interface PaymentProcessor {
  pay(amount: number, currency: string): boolean;
}

// Adapter bridges the two without touching the legacy SDK.
class LegacyPaymentAdapter implements PaymentProcessor {
  constructor(private legacySdk: LegacyPaymentSdk) {}

  pay(amount: number, currency: string): boolean {
    const cents = Math.round(amount * 100);
    const result = this.legacySdk.makePayment(cents, currency);
    return result.ok;
  }
}

function checkout(processor: PaymentProcessor) {
  const success = processor.pay(49.99, "USD");
  console.log(success ? "Payment succeeded" : "Payment failed");
}

checkout(new LegacyPaymentAdapter(new LegacyPaymentSdk()));
`,
    terminalCommand: "ts-node Adapter.ts",
    terminalOutput: [
      "Payment succeeded",
      "",
      "✓ checkout() only knows PaymentProcessor —",
      "  the legacy SDK's odd shape stays isolated in the adapter.",
    ],
  },
];
