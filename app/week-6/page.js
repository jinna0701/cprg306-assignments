import ItemList from './item-list';

export default function Page() {
    return (
        <main>
            <div>
                <h1 className="font-semibold text-4xl">Shopping List</h1>
                <ItemList />
            </div>
        </main>
    );
}
