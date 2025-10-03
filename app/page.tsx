// app/agenda/page.tsx
'use client';

import React, { useState } from 'react';

// Tipos
interface Appointment {
  id: number;
  clientName: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}

interface FormData {
  clientName: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}

// Ícones SVG simples
const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MessageIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const EditIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);

const TrashIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
);

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default function AgendaPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 1,
      clientName: 'Emiláiny',
      phone: '27988986252',
      service: 'Sobrancelha',
      date: '2025-10-05',
      time: '16:00',
      notes: 'Cliente prefere design arqueado'
    },
    {
      id: 2,
      clientName: 'Ana Costa',
      phone: '27988776655',
      service: 'Depilação',
      date: '2025-10-05',
      time: '14:00',
      notes: ''
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    clientName: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });

  const services = [
    'Sobrancelha',
    'Depilação',
    'Manicure',
    'Pedicure',
    'Design de Sobrancelha',
    'Limpeza de Pele',
    'Maquiagem'
  ];

  const openModal = (appointment: Appointment | null = null) => {
    if (appointment) {
      setEditingId(appointment.id);
      setFormData({
        clientName: appointment.clientName,
        phone: appointment.phone,
        service: appointment.service,
        date: appointment.date,
        time: appointment.time,
        notes: appointment.notes
      });
    } else {
      setEditingId(null);
      setFormData({
        clientName: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        notes: ''
      });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingId(null);
    setFormData({
      clientName: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      notes: ''
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!formData.clientName || !formData.phone || !formData.service || !formData.date || !formData.time) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }
    if (editingId) {
      setAppointments(appointments.map(apt => 
        apt.id === editingId ? { ...formData, id: editingId } : apt
      ));
    } else {
      setAppointments([...appointments, { ...formData, id: Date.now() }]);
    }
    closeModal();
  };

  const deleteAppointment = (id: number) => {
    if (confirm('Tem certeza que deseja excluir este agendamento?')) {
      setAppointments(appointments.filter(apt => apt.id !== id));
    }
  };

  const sendWhatsAppReminder = (appointment: Appointment) => {
  const message = `Olá ${appointment.clientName}! 👋\n\n` +
                  `Lembrando do seu agendamento:\n` +
                  `📅 Data: ${formatDate(appointment.date)}\n` +
                  `⏰ Horário: ${appointment.time}\n` +
                  `💅 Serviço: ${appointment.service}\n\n` +
                  `Te espero! ✨`;

  const cleanedPhone = appointment.phone.replace(/\D/g, '');

  // Validação básica: número brasileiro precisa ter 11 dígitos
  if (cleanedPhone.length !== 11) {
    alert('Número de telefone inválido. Verifique se está no formato correto com DDD e 9 dígitos.');
    return;
  }

  const url = `https://wa.me/55${cleanedPhone}?text=${encodeURIComponent(message)}`;
  console.log('Link do WhatsApp:', url);
  window.open(url, '_blank');
};

  const formatDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
  };

  const formatPhone = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };

  const sortedAppointments = [...appointments].sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}`);
    const dateB = new Date(`${b.date}T${b.time}`);
    return dateA.getTime() - dateB.getTime();
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                📅 Agenda de Atendimentos
              </h1>
              <p className="text-gray-600">Gerencie seus agendamentos de forma simples e eficiente</p>
            </div>
            <button
              onClick={() => openModal()}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all flex items-center gap-2 shadow-md"
            >
              <PlusIcon />
              Novo Agendamento
            </button>
          </div>
        </div>

        <div className="grid gap-4">
          {sortedAppointments.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <div className="mx-auto text-gray-300 mb-4 flex justify-center">
                <CalendarIcon />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Nenhum agendamento ainda
              </h3>
              <p className="text-gray-500">Clique em "Novo Agendamento" para começar</p>
            </div>
          ) : (
            sortedAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 border-l-4 border-pink-500"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                        {appointment.clientName.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {appointment.clientName}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600">
                          <PhoneIcon />
                          <span className="text-sm">{formatPhone(appointment.phone)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                      <div className="flex items-center gap-2 text-gray-700">
                        <div className="text-pink-500">
                          <CalendarIcon />
                        </div>
                        <span className="font-medium">{formatDate(appointment.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <div className="text-purple-500">
                          <ClockIcon />
                        </div>
                        <span className="font-medium">{appointment.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <div className="text-blue-500">
                          <UserIcon />
                        </div>
                        <span className="font-medium">{appointment.service}</span>
                      </div>
                    </div>

                    {appointment.notes && (
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                        <p className="text-sm text-gray-700">
                          <strong>Observações:</strong> {appointment.notes}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => sendWhatsAppReminder(appointment)}
                      className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-all shadow-md"
                      title="Enviar lembrete no WhatsApp"
                    >
                      <MessageIcon />
                    </button>
                    <button
                      onClick={() => openModal(appointment)}
                      className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-all shadow-md"
                      title="Editar"
                    >
                      <EditIcon />
                    </button>
                    <button
                      onClick={() => deleteAppointment(appointment.id)}
                      className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition-all shadow-md"
                      title="Excluir"
                    >
                      <TrashIcon />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {editingId ? 'Editar Agendamento' : 'Novo Agendamento'}
                  </h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <XIcon />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome da Cliente *
                    </label>
                    <input
                      type="text"
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                      placeholder="Ex: Maria Silva"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefone (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                      placeholder="Ex: 27999887766"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Serviço *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Selecione um serviço</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Data *
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Horário *
                      </label>
                      <input
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Observações
                    </label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                      rows={3}
                      placeholder="Ex: Cliente prefere design arqueado"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={closeModal}
                      className="flex-1 px-6 py-3 rounded-lg border-2 border-gray-300 font-semibold text-gray-700 hover:bg-gray-50 transition-all"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all shadow-md"
                    >
                      {editingId ? 'Salvar Alterações' : 'Criar Agendamento'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}