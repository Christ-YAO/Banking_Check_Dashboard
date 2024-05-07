import Image from "next/image";
import CheckStatus from "./checkStatus";
// import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
// import InvoiceStatus from '@/app/ui/invoices/status';
// import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
// import { fetchFilteredInvoices } from '@/app/lib/data';

type checkProps = {
  id: number;
  serialNumber: number;
  name: string;
  accountNumber: string;
  sheetQuantity: number;
  status: string;
};

const CHECK_LIST: checkProps[] = [
  {
    id: 1,
    serialNumber: 1234567,
    name: "Chéquier classique",
    accountNumber: "CI008-01111-111xxx91058-27",
    sheetQuantity: 25,
    status: "confirmed",
  },
  {
    id: 2,
    serialNumber: 9876543,
    name: "Chéquier portefeuille ",
    accountNumber: "CI006-01111-132xkx28711-22",
    sheetQuantity: 50,
    status: "pending",
  },
  {
    id: 2,
    serialNumber: 3052746,
    name: "Chéquier correspondance  ",
    accountNumber: "CI009-01111-638xxj73549-14",
    sheetQuantity: 50,
    status: "pending",
  },
];

export default async function CheckTable() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {CHECK_LIST?.map((check) => (
              <div
                key={check.id}
                className="mb-4 border hover:brightness-95 transition-all w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      {/* <Image
                        src={check.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${check.name}'s profile picture`}
                      /> */}
                      <b>{check.serialNumber}</b>
                    </div>
                    <b className="text-sm text-gray-500">{check.name}</b>
                  </div>
                  <b className="text-sm text-gray-500">{check.accountNumber}</b>
                  {/* <CheckStatus
                      status={check.status}
                      accountNumber={check.accountNumber}
                    /> */}
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    {/* <p className="text-xl font-medium">
                      {formatCurrency(check.amount)}
                    </p>
                    <p>{formatDateToLocal(check.date)}</p> */}
                    <b className="text-sm text-gray-500">
                      {check.sheetQuantity} feuilles
                    </b>
                  </div>
                  <div className="flex justify-end gap-2">
                    <CheckStatus
                      status={check.status}
                      accountNumber={check.accountNumber}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-semibold sm:pl-6">
                  N° Série
                </th>
                <th scope="col" className="px-3 py-5 font-semibold">
                  Intitulé compte
                </th>
                <th scope="col" className="px-3 py-5 font-semibold">
                  N° compte
                </th>
                <th scope="col" className="px-3 py-5 font-semibold">
                  Quantité feuilles
                </th>
                <th scope="col" className="px-3 py-5 font-semibold sr-only">
                  Pré-confirmation
                </th>
                {/* <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th> */}
              </tr>
            </thead>
            <tbody className="bg-white">
              {CHECK_LIST?.map((check) => (
                <tr
                  key={check.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg hover:bg-gray-50 transition-all"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      {/* <Image
                        src={check.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${check.name}'s profile picture`}
                      /> */}
                      <b>{check.serialNumber}</b>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">{check.name}</td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {/* {formatCurrency(check.amount)} */}
                    {check.accountNumber}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-center">
                    {/* {formatDateToLocal(check.date)} */}
                    {check.sheetQuantity}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <CheckStatus
                      status={check.status}
                      accountNumber={check.accountNumber}
                    />
                  </td>
                  {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={check.id} />
                      <DeleteInvoice id={check.id} />
                    </div>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
