import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useState } from 'react';
import { AiFillGitlab, AiFillHome, AiFillSecurityScan, AiFillTwitterCircle } from 'react-icons/ai';
import { SiThemodelsresource } from 'react-icons/si';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../theme-provider';
import { Input } from '../ui/input';

export const Navbar = () => {
    const [activeItem, setActiveItem] = useState<string>('store');
    const { theme } = useTheme();
    const handleItemClick = (value: string) => {
        setActiveItem(value);
    };

    return (
        <>
            <div className="border-y py-3 flex items-center justify-between">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem value="store">
                            <NavigationMenuLink
                                asChild
                                className={`${navigationMenuTriggerStyle()} ${
                                    activeItem === 'store' &&
                                    `${theme === 'light' ? 'bg-gray-100' : 'bg-[#27272A]'}`
                                }`}
                                onClick={() => handleItemClick('store')}
                            >
                                <NavLink to="">
                                    <AiFillHome size={30} />
                                    Trang chủ
                                </NavLink>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem value="products">
                            <NavigationMenuLink
                                asChild
                                className={`${navigationMenuTriggerStyle()} ${
                                    activeItem === 'products' &&
                                    `${theme === 'light' ? 'bg-gray-100' : 'bg-[#27272A]'}`
                                }`}
                                onClick={() => handleItemClick('products')}
                            >
                                <NavLink to="products">
                                    <AiFillGitlab size={30} />
                                    Sản phẩm
                                </NavLink>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem value="blog">
                            <NavigationMenuLink
                                asChild
                                className={`${navigationMenuTriggerStyle()} ${
                                    activeItem === 'blog' &&
                                    `${theme === 'light' ? 'bg-gray-100' : 'bg-[#27272A]'}`
                                }`}
                                onClick={() => handleItemClick('blog')}
                            >
                                <NavLink to="blog">
                                    <AiFillTwitterCircle size={30} />
                                    Bài viết
                                </NavLink>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem value="service">
                            <NavigationMenuLink
                                asChild
                                className={`${navigationMenuTriggerStyle()} ${
                                    activeItem === 'service' &&
                                    `${theme === 'light' ? 'bg-gray-100' : 'bg-[#27272A]'}`
                                }`}
                                onClick={() => handleItemClick('service')}
                            >
                                <NavLink to="service">
                                    <SiThemodelsresource size={30} />
                                    Dịch vụ
                                </NavLink>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem value="faq">
                            <NavigationMenuLink
                                asChild
                                className={`${navigationMenuTriggerStyle()} ${
                                    activeItem === 'faq' &&
                                    `${theme === 'light' ? 'bg-gray-100' : 'bg-[#27272A]'}`
                                }`}
                                onClick={() => handleItemClick('faq')}
                            >
                                <NavLink to="faq">
                                    <AiFillSecurityScan size={30} />
                                    FAQ
                                </NavLink>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <Input
                    type="text"
                    className={'w-[250px]'}
                    placeholder="Nhập nội dung để tìm kiếm"
                />
            </div>
        </>
    );
};
