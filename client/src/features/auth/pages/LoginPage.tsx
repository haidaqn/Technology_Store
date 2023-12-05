import { ModeToggle } from '@/components/mode-toggle';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { InputPassword } from '@/components/ui/inputPassword';
import { Label } from '@/components/ui/label';
import * as React from 'react';

export function LoginPage() {
    const { theme } = useTheme();
    const [isAuth, setIsAuth] = React.useState<boolean>(true);
    const handleLogin = () => {};
    const handleRegister = () => {};
    return (
        <>
            <div className="absolute top-[20px] right-[20px] z-20">
                <ModeToggle />
            </div>
            <div className="container relative hidden h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r  lg:flex">
                    <div className="absolute inset-0 bg-zinc-800" />
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        <img
                            src="/assets/logo-white.png"
                            alt="logo-white-neuron"
                            className="w-[300px]"
                        />
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                &ldquo;Welcome to White Neuron Smart Technology & IT Solutions,
                                where innovation meets excellence in the ever-evolving landscape of
                                technology. As a leading company at the forefront of smart
                                technology and IT solutions, White Neuron is dedicated to
                                transforming businesses through cutting-edge innovations and
                                intelligent solutions.&rdquo;
                            </p>
                            <footer className="text-sm">White Neuron</footer>
                        </blockquote>
                    </div>
                </div>
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                {isAuth ? 'Đăng nhập' : 'Đăng ký'}
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                {isAuth
                                    ? 'Nhập tên đăng nhập và mật khẩu để tiếp tục'
                                    : 'Vui lòng nhập đủ các thông tin ở dưới để tạo tài khoản'}
                            </p>
                        </div>
                        {isAuth ? (
                            <>
                                <form>
                                    <CardContent className="grid gap-3 px-6 py-4">
                                        <div className="grid gap-2 mb-2">
                                            <Label htmlFor="username" className="mb-0.5">
                                                Tên đăng nhập
                                            </Label>
                                            <Input
                                                id="username"
                                                type="text"
                                                placeholder="haidang@gmail.com"
                                                autoComplete="username"
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="password" className="mb-0.5">
                                                Mật khẩu
                                            </Label>
                                            <InputPassword
                                                id="password"
                                                placeholder="Nhập mật khẩu"
                                            />
                                        </div>
                                        <div className="flex justify-between">
                                            <i
                                                onClick={() => setIsAuth(false)}
                                                className="text-sm cursor-pointer hover:opacity-80"
                                            >
                                                Bạn chưa có tài khoản?
                                            </i>
                                            <i className="text-sm cursor-pointer hover:opacity-80">
                                                Quên mật khẩu?
                                            </i>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full">Đăng nhập</Button>
                                    </CardFooter>
                                </form>
                            </>
                        ) : (
                            <>
                                <form>
                                    <CardContent className="grid gap-3 px-6 py-4">
                                        <div className="grid gap-2 mb-2">
                                            <Label htmlFor="username" className="mb-0.5">
                                                Tên đăng nhập (email)
                                            </Label>
                                            <Input
                                                id="username"
                                                type="text"
                                                placeholder="haidang@gmail.com"
                                                autoComplete="username"
                                            />
                                        </div>
                                        <div className="grid gap-2 mb-2">
                                            <Label htmlFor="username" className="mb-0.5">
                                                Tên của bạn
                                            </Label>
                                            <Input
                                                id="username"
                                                type="text"
                                                placeholder="Phương Hải Đăng"
                                                autoComplete="username"
                                            />
                                        </div>
                                        <div className="grid gap-2 mb-2">
                                            <Label htmlFor="username" className="mb-0.5">
                                                Số điện thoại
                                            </Label>
                                            <Input
                                                id="username"
                                                type="text"
                                                placeholder="03353***52"
                                                autoComplete="username"
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="password" className="mb-0.5">
                                                Mật khẩu
                                            </Label>
                                            <InputPassword
                                                id="password"
                                                placeholder="Nhập mật khẩu"
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="password" className="mb-0.5">
                                                Xác nhận mật khẩu
                                            </Label>
                                            <InputPassword
                                                id="password"
                                                placeholder="Nhập mật khẩu xác thực"
                                            />
                                        </div>
                                        <p
                                            className="text-start cursor-pointer hover:opacity-80"
                                            onClick={() => setIsAuth(true)}
                                        >
                                            <i className="text-sm ">Bạn đã có tài khoản?</i>
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full">Đăng nhập</Button>
                                    </CardFooter>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
