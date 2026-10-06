'use client'
import { useState } from 'react'
import jsPDF from 'jspdf'

export default function Home() {
  const [client, setClient] = useState('')
  const [ice, setIce] = useState('')
  const [service, setService] = useState('')
  const [price, setPrice] = useState('')

  const generatePDF = () => {
    const doc = new jsPDF()
    doc.text('Facture - OWMAD', 20, 20)
    doc.text(`Client: ${client}`, 20, 40)
    doc.text(`ICE: ${ice}`, 20, 50)
    doc.text(`Service: ${service}`, 20, 60)
    doc.text(`Prix: ${price} MAD`, 20, 70)
    doc.save(`facture-${client}.pdf`)
  }
  const sendWhatsApp = () => {
    const msg = `Salam ${client}, facture ${service}: ${price} MAD - OWMAD`
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank')
  }
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-6" dir="rtl">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">owmad.ma</h1>
        <p className="text-center text-zinc-400 mb-8">فاكتورة مقاول ذاتي</p>
        <div className="space-y-4 bg-zinc-900 p-6 rounded-2xl">
          <input className="w-full p-3 rounded-xl bg-zinc-800" placeholder="اسم الكليان" value={client} onChange={e=>setClient(e.target.value)} />
          <input className="w-full p-3 rounded-xl bg-zinc-800" placeholder="ICE" value={ice} onChange={e=>setIce(e.target.value)} />
          <input className="w-full p-3 rounded-xl bg-zinc-800" placeholder="الخدمة" value={service} onChange={e=>setService(e.target.value)} />
          <input className="w-full p-3 rounded-xl bg-zinc-800" placeholder="الثمن MAD" type="number" value={price} onChange={e=>setPrice(e.target.value)} />
          <button onClick={generatePDF} className="w-full bg-white text-black p-3 rounded-xl font-bold">تحميل PDF</button>
          <button onClick={sendWhatsApp} className="w-full bg-green-500 p-3 rounded-xl font-bold">إرسال واتساب</button>
        </div>
      </div>
    </main>
  )
          }
