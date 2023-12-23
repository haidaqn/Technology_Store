import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { InputPassword } from '@/components/ui/inputPassword';
import { RegisterForm } from '@/models';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { authActions } from '../AuthSlice';
import { useToast } from '@/components/ui/use-toast';

export const RegisterPage = () => {
    const navitage = useNavigate();
    const dispatch = useAppDispatch();
    const { registering, actionAuth } = useAppSelector((state) => state.auth);
    const { toast } = useToast();
    const schemaRegister = yup.object().shape({
        name: yup.string().required('Cần nhập tên của bạn!'),
        email: yup.string().email('Vui lòng nhập đúng định dạng!').required('Cần nhập email!'),
        password: yup
            .string()
            .min(6, 'Mật khẩu phải có ít nhất 6 kí tự')
            .required('Cần nhập mật khẩu!'),
        passwordConfirm: yup
            .string()
            .required('Cần nhập mật khẩu xác nhận!')
            .min(6, 'Mật khẩu phải có ít nhất 6 kí tự')
            .oneOf([yup.ref('password')], 'Mật khẩu không khớp'),
        mobile: yup
            .string()
            .matches(/^\d{10}$/, 'Vui lòng nhập đúng định dạng số điện thoại')
            .required('Cần nhập số điện thoại!'),
    });
    const formRegister = useForm<RegisterForm>({
        resolver: yupResolver(schemaRegister),
        defaultValues: {
            email: '',
            password: '',
            passwordConfirm: '',
            mobile: '',
        },
    });
    const handleRegister: SubmitHandler<RegisterForm> = (data) => {
        dispatch(authActions.register(data));
    };

    useEffect(() => {
        if (actionAuth == 'Failed') {
            toast({
                title: 'Đăng ký thất bại',
                description: 'Tài khoản đã tồn tại !',
                variant: 'destructive',
            });
        }
    }, [registering, toast]);
    return (
        <Form {...formRegister}>
            <form onSubmit={formRegister.handleSubmit(handleRegister)} className="space-y-2">
                <FormField
                    control={formRegister.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Nhập tên email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formRegister.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tên của bạn</FormLabel>
                            <FormControl>
                                <Input placeholder="Nhập tên của bạn" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formRegister.control}
                    name="mobile"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Số điện thoại</FormLabel>
                            <FormControl>
                                <Input placeholder="Nhập số điện thoại" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formRegister.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mật Khẩu</FormLabel>
                            <FormControl>
                                <InputPassword placeholder="Nhập mật khẩu !" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formRegister.control}
                    name="passwordConfirm"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mật khẩu xác nhận</FormLabel>
                            <FormControl>
                                <InputPassword placeholder="Xác nhận mật khẩu !" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <p
                    className="text-start cursor-pointer hover:opacity-80"
                    onClick={() => {
                        formRegister.reset();
                        navitage('/auth/login');
                    }}
                >
                    <i className="text-sm ">Bạn đã có tài khoản?</i>
                </p>
                <Button className="w-full">Đăng ký</Button>
            </form>
        </Form>
    );
};
