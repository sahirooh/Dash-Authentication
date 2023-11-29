import React, { useEffect } from 'react'
import { IoMdMail } from 'react-icons/io'
import { useMutation } from 'react-query';
import { useParams } from 'react-router-dom';
import { sendVerificationMail } from '../../../api/query/userQuery';
import { toast } from 'sonner';

const VerifyEmail = () => {

  const {email} = useParams();

  if (!email) {
    return <div className='h-[100vh] items-center justify-center'>Invalid Email</div>
  }

  const { mutate, isLoading } = useMutation({
    mutationKey: ["verify-email"],
    mutationFn: sendVerificationMail,
    onSettled: (data) => {
      console.log(data);
    },
    onError: (error) => {
      toast.error("An error occurred: " + error.message, {
        position: "bottom-center",
        closeButton: false,
        description: "Please try again later",
        theme: "colored",
      });
    },
    enabled: !!email,
  });

  useEffect(() => {
    mutate({ email });
  
  }, [email])

  return (
    <div className="grid justify-center h-[100vh] items-center">
      <div className="flex sm:shadow-2xl shadow-none flex-col p-4 rounded-lg items-center gap-4">
        <IoMdMail className="text-4xl text-purple-500" />
        <h1 className="font-medium text-xl">Email Verification</h1>
        <p className="max-w-[410px] text-gray-400 text-sm text-center">
          We have sent you an email verification to{" "}
          <span className="font-medium text-black">{email}</span>. If you didn’t
          receive it, click the button below.
        </p>
        <button
          onClick={() => {
            mutate({ email });
          }}
          isLoading={isLoading}
          className="bg-[#EEEEF4] font-medium w-full rounded-lg py-2"
        >
          Re-send Email
        </button>
      </div>
    </div>
  );
}

export default VerifyEmail