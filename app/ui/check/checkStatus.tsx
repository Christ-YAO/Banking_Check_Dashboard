import clsx from 'clsx';
import { CheckCheck, Clock3 } from 'lucide-react';
import Link from 'next/link';

export default function CheckStatus({ status, accountNumber }: { status: string, accountNumber: string}) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'confirmed',
        },
      )}
    >
      {status === 'pending' ? (
        <Link href={`/dashboard/pre-confirm/${accountNumber}`} className='flex items-center py-[1px] animate-pulse hover:brightness-0 hover:animate-none'>
          Pré-confirmer
          <Clock3 className="ml-1 w-4 text-gray-500" />
        </Link>
      ) : null}
      {status === 'confirmed' ? (
        <div className='flex items-center py-[1px] hover:cursor-not-allowed'>
          Confirmé
          <CheckCheck className="ml-1 w-4 text-white" />
        </div>
      ) : null}
    </span>
  );
}
