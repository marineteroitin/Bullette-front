import DataBaseLocalRepository from '../../../../core/ports/repositories/DataBaseLocal.repository';

export class LocalStorageRepository implements DataBaseLocalRepository {
    public setItem(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    public getItem(key: string): any {
        return localStorage.getItem(key);
    }

    public removeItem(key: string): void {
        localStorage.removeItem(key);
    }

    public clear(): void {
        localStorage.clear();
    }
}
