import React, { useState } from 'react'
import Button from '../components/Button.jsx'
import Input from '../components/Input.jsx'
import Card from '../components/Card.jsx'
import Alert from '../components/Alert.jsx'

function Section({ title, children }) {
    return (
        <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{title}</h2>
            <div className="h-px bg-gradient-to-r from-blue-500 to-violet-500 mb-6 rounded-full" />
            {children}
        </section>
    )
}

export default function UIKit() {
    const [inputValue, setInputValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [closedAlerts, setClosedAlerts] = useState([])

    const closeAlert = (id) => setClosedAlerts((prev) => [...prev, id])

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero */}
            <div className="mb-12 text-center">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 rounded-full mb-4">
                    Lab4 – Tailwind CSS v4
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
                    UI Kit
                </h1>
                <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                    Button, Input, Card ve Alert bileşenlerinin tüm varyantları.
                </p>
            </div>

            {/* ── BUTTONS ── */}
            <Section title="Button Bileşeni">
                <div className="space-y-6">
                    {/* Renk Varyantları */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">Renk Varyantları</p>
                        <div className="flex flex-wrap gap-3">
                            <Button id="btn-primary" variant="primary">Primary</Button>
                            <Button id="btn-secondary" variant="secondary">Secondary</Button>
                            <Button id="btn-success" variant="success">Success</Button>
                            <Button id="btn-danger" variant="danger">Danger</Button>
                            <Button id="btn-outline" variant="outline">Outline</Button>
                        </div>
                    </div>

                    {/* Boyut Varyantları */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">Boyut Varyantları</p>
                        <div className="flex flex-wrap items-center gap-3">
                            <Button id="btn-sm" variant="primary" size="sm">Küçük (sm)</Button>
                            <Button id="btn-md" variant="primary" size="md">Orta (md)</Button>
                            <Button id="btn-lg" variant="primary" size="lg">Büyük (lg)</Button>
                        </div>
                    </div>

                    {/* Disabled */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">Disabled Durumu</p>
                        <div className="flex flex-wrap gap-3">
                            <Button id="btn-disabled" variant="primary" disabled>Devre Dışı</Button>
                            <Button id="btn-disabled-danger" variant="danger" disabled>Devre Dışı</Button>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ── INPUTS ── */}
            <Section title="Input Bileşeni">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <Input
                        id="input-normal"
                        label="Normal Input"
                        placeholder="Bir şeyler yazın..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        helperText="Yardımcı metin burada görünür."
                    />
                    <Input
                        id="input-error"
                        label="Hata Durumu"
                        placeholder="Geçersiz değer"
                        value="hatalı@"
                        error="Geçerli bir e-posta adresi girin."
                    />
                    <Input
                        id="input-email"
                        label="E-posta"
                        type="email"
                        placeholder="ornek@mail.com"
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                        required
                    />
                    <Input
                        id="input-password"
                        label="Şifre"
                        type="password"
                        placeholder="Şifrenizi girin"
                        helperText="En az 8 karakter kullanın."
                    />
                    <Input
                        id="input-disabled"
                        label="Devre Dışı Input"
                        placeholder="Düzenlenemez"
                        disabled
                    />
                    <Input
                        id="input-search"
                        label="Arama"
                        type="search"
                        placeholder="Ara..."
                    />
                </div>
            </Section>

            {/* ── CARDS ── */}
            <Section title="Card Bileşeni">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Shadowed Variant */}
                    <Card
                        id="card-shadowed-1"
                        variant="shadowed"
                        title="Shadowed Card"
                        subtitle="Gölge varyantı"
                    >
                        Derin gölge efektiyle öne çıkan kart varyantı. Hover'da gölge derinleşir.
                    </Card>

                    <Card
                        id="card-shadowed-2"
                        variant="shadowed"
                        title="React Projesi"
                        subtitle="Web Uygulaması"
                        footer={
                            <div className="flex gap-2">
                                <Button variant="primary" size="sm">Görüntüle</Button>
                                <Button variant="outline" size="sm">GitHub</Button>
                            </div>
                        }
                    >
                        React ve Vite kullanılarak geliştirilmiş modern bir web uygulaması projesi.
                    </Card>

                    {/* Bordered Variant */}
                    <Card
                        id="card-bordered-1"
                        variant="bordered"
                        title="Bordered Card"
                        subtitle="Kenarlık varyantı"
                    >
                        İnce kenarlık ile minimal görünüm sunan kart varyantı. Temiz ve sade bir tasarım.
                    </Card>

                    <Card
                        id="card-bordered-2"
                        variant="bordered"
                        title="UI Tasarımı"
                        subtitle="Tailwind CSS v4"
                        footer={
                            <span className="text-xs text-gray-400 dark:text-gray-500">
                                Güncellendi: Mart 2026
                            </span>
                        }
                    >
                        Tailwind CSS v4 kullanılarak oluşturulan component-based UI tasarım sistemi.
                    </Card>

                    <Card
                        id="card-shadowed-stats"
                        variant="shadowed"
                        title="İstatistikler"
                        subtitle="Proje özeti"
                    >
                        <div className="grid grid-cols-2 gap-3 mt-2">
                            {[['4', 'Bileşen'], ['8+', 'Varyant'], ['3', 'Commit'], ['100', 'Puan']].map(([val, lbl]) => (
                                <div key={lbl} className="text-center p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{val}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{lbl}</p>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card
                        id="card-bordered-contact"
                        variant="bordered"
                        title="İletişim"
                        subtitle="Bana ulaşın"
                    >
                        <div className="space-y-2 mt-1">
                            <p className="flex items-center gap-2 text-sm">
                                <span>📧</span> esma@example.com
                            </p>
                            <p className="flex items-center gap-2 text-sm">
                                <span>💼</span> linkedin.com/in/esmayildirim
                            </p>
                            <p className="flex items-center gap-2 text-sm">
                                <span>🐙</span> github.com/frauvate
                            </p>
                        </div>
                    </Card>
                </div>
            </Section>

            {/* ── ALERTS ── */}
            <Section title="Alert Bileşeni">
                <div className="space-y-4">
                    {!closedAlerts.includes('info') && (
                        <Alert
                            id="alert-info"
                            variant="info"
                            title="Bilgi"
                            onClose={() => closeAlert('info')}
                        >
                            Bu bir bilgilendirme uyarısıdır. Kullanıcıya faydalı bilgi iletmek için kullanılır.
                        </Alert>
                    )}
                    {!closedAlerts.includes('success') && (
                        <Alert
                            id="alert-success"
                            variant="success"
                            title="Başarılı!"
                            onClose={() => closeAlert('success')}
                        >
                            İşlem başarıyla tamamlandı. Verileriniz kaydedildi.
                        </Alert>
                    )}
                    {!closedAlerts.includes('warning') && (
                        <Alert
                            id="alert-warning"
                            variant="warning"
                            title="Dikkat"
                            onClose={() => closeAlert('warning')}
                        >
                            Bu işlem geri alınamaz. Devam etmeden önce emin olun.
                        </Alert>
                    )}
                    {!closedAlerts.includes('error') && (
                        <Alert
                            id="alert-error"
                            variant="error"
                            title="Hata"
                            onClose={() => closeAlert('error')}
                        >
                            İşlem gerçekleştirilemedi. Lütfen tekrar deneyin.
                        </Alert>
                    )}
                    {closedAlerts.length === 4 && (
                        <div className="text-center py-6">
                            <p className="text-gray-500 dark:text-gray-400 mb-3">Tüm alertler kapatıldı.</p>
                            <Button
                                id="btn-reset-alerts"
                                variant="outline"
                                size="sm"
                                onClick={() => setClosedAlerts([])}
                            >
                                Alertleri Sıfırla
                            </Button>
                        </div>
                    )}
                </div>
            </Section>
        </div>
    )
}
