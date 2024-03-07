import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const data = {
    invoice: ["INV001", "INV002", "INV003", "INV004", "INV005", "INV006", "INV007"],
    paymentStatus: ["Paid", "Pending", "Unpaid", "Paid", "Paid", "Pending", "Unpaid"],
    totalAmount: ["250.00", "150.00", "350.00", "450.00", "550.00", "200.00", "300.00",],
    paymentMethod: ["Credit Card", "PayPal", "Bank Transfer", "Credit Card", "PayPal", "Bank Transfer", "Credit Card"],
}

const dataCols = Object.keys(data);

const invoices: Record<string, string>[] = [];

for (let i = 0; i < data.invoice.length; i++) {
    let curr: Record<string, string> = {};
    for (let j = 0; j < dataCols.length; j++) {
        curr[dataCols[j]] = data[dataCols[j]][i]
    }
    invoices.push(curr);
}


export function TableDemo() {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount ($)</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$ {data.totalAmount.map(parseFloat).reduce((a, b) => { return a + b })}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
