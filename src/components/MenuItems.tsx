import { MenuItem } from '../types';

type MenuItemProps = {
    item: MenuItem;
    addItem: (item: MenuItem) => void;
};

export const MenuItems = ({ item, addItem }: MenuItemProps) => {
    return (
        <button className='rounded-lg border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200 ' onClick={() => addItem(item)}>
            <p>{item.name}</p>
            <p className='font-black'>${item.price}</p>
        </button>
    );
};
