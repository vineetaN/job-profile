"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { auth_service } from '@/context/AppContext';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'
import toast from 'react-hot-toast';
import { Loader2, Mail } from 'lucide-react';

const ForgotPage = () => {
    const [email , setemail] = useState("")
    const [btnLoading , setBtnLoading] = useState(false);
    const router = useRouter();

    const submitHandler = async(e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setBtnLoading(true)
        try {
            const {data} = await axios.post(`${auth_service}/api/auth/forgot`, {
                email,
            })
            toast.success(data.message)
            setemail("")
        } catch (error : any) {
            toast.error(error.response?.data?.message || "Something went wrong")
        }
        finally{
            setBtnLoading(false)
        }
    }

  return (
    <div className='min-h-screen flex items-center justify-center px-4 py-12'>
        <div className="w-full max-w-md">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-2">Forgot Password</h1>
                <p className="text-sm opacity-70">Enter your email and we'll send you a reset link</p>
            </div>

            <div className="border border-gray-400 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
                <form onSubmit={submitHandler} className="space-y-5">
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                        <div className="relative">
                            <Mail className="icon-style" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                                required
                                className="pl-10 h-11"
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        disabled={btnLoading}
                        className="w-full h-11 cursor-pointer"
                    >
                        {btnLoading ? (
                            <>
                                <Loader2 size={18} className="animate-spin" />
                                Sending...
                            </>
                        ) : "Send Reset Link"}
                    </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-400 text-center">
                    <Link href="/login" className="text-sm text-blue-500 hover:underline cursor-pointer">
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForgotPage
