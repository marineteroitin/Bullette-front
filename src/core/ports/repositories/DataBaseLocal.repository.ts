export default interface DataBaseLocalRepository {
    setItem(key: string, value: any): void;
    getItem(key: string): any;
    removeItem(key: string): void;
    clear(): void;
}
