import { ModeToggle } from '@/components/mode-toggle';
import { useTheme } from '../theme-provider';
import { Link } from 'react-router-dom';
import { AiFillMail } from 'react-icons/ai';
import { FaPhone } from 'react-icons/fa6';
import { IoBagSharp } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useInforUser } from '@/hooks/InfoUser';
import { Button } from '../ui/button';
import { authActions } from '@/features/auth/AuthSlice';
// import { useToast } from '@/components/ui/use-toast';
// import { useEffect } from 'react';

export const Header = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const { actionAuth } = useAppSelector((state) => state.auth);
    const user = useInforUser();
    // const { toast } = useToast();
    const handleLogout = () => {
        dispatch(authActions.logout());
    };

    // useEffect(() => {
    //     if (actionAuth === 'No action') {
    //         toast({
    //             title: 'Đăng xuất thành công',
    //             description: 'Bạn đã đăng xuất thành công !',
    //             variant: 'destructive',
    //         });
    //     }
    // }, [toast, authActions, user]);
    return (
        <div className="flex flex-col gap-6">
            <div
                className={`h-12 ${
                    theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'
                }`}
            >
                <header className="px-left-right h-full flex items-center justify-between relative">
                    <span className=" uppercase font-medium">
                        order online or call us (+1800) 000 8808
                    </span>
                    <div className="">
                        {actionAuth === 'Success' && user ? (
                            <div className="flex items-center justify-center gap-5">
                                <h1 className="text-lg font-semibold tracking-widest">
                                    Xin Chào, {user.name} !
                                </h1>
                                <Button
                                    className={`${
                                        theme === 'dark'
                                            ? 'bg-black text-white'
                                            : 'bg-white text-black'
                                    }`}
                                    onClick={() => handleLogout()}
                                >
                                    Đăng Xuất
                                </Button>
                            </div>
                        ) : (
                            <>
                                <Link
                                    to="/auth/login"
                                    className=" uppercase font-medium tracking-widest hover:opacity-80 cursor-pointer"
                                >
                                    đăng nhập
                                </Link>
                                <span className=" uppercase font-medium tracking-widest">/</span>
                                <Link
                                    to="/auth/register"
                                    className=" uppercase font-medium tracking-widest hover:opacity-80 cursor-pointer"
                                >
                                    đăng ký
                                </Link>
                            </>
                        )}
                    </div>
                    <div className="absolute right-10">
                        <ModeToggle />
                    </div>
                </header>
            </div>
            <div className="px-left-right flex items-center justify-between">
                <img src="/assets/logo.png" alt="logo" className="w-[250px] h-[28px]" />
                <div className="flex gap-10">
                    <div className="flex flex-col gap-0 items-center justify-center">
                        <h1 className="flex gap-1">
                            <FaPhone size={20} />
                            <span className="font-medium">(+1800) 000 8808</span>
                        </h1>
                        <span className="text-sm">Online Support 24/7</span>
                    </div>
                    <div className="flex flex-col gap-0 items-center justify-center">
                        <h1 className="flex gap-1">
                            <AiFillMail size={25} />
                            <span className="font-medium uppercase">haidang02032003@gmail.com</span>
                        </h1>
                        <span className="text-sm">Mon-Sat 9:00AM - 8:00PM</span>
                    </div>
                    <div className="flex items-center justify-center relative">
                        <IoBagSharp size={40} />
                        {user && (
                            <span className="text-base absolute top-[-4px] right-[-4px]">
                                {user?.cart.length}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
