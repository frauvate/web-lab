import React, { useState } from 'react'
import Button from '../components/Button.jsx'
import Input from '../components/Input.jsx'
import Card from '../components/Card.jsx'
import Alert from '../components/Alert.jsx'

export default function Portfolio() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const validate = () => {
        const e = {}
        if (!formData.name || formData.name.length < 2) e.name = 'Ad en az 2 karakter olmalıdır.'
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Geçerli bir e-posta girin.'
        if (!formData.message || formData.message.length < 10) e.message = 'Mesaj en az 10 karakter olmalıdır.'
        setErrors(e)
        return Object.keys(e).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) setSubmitted(true)
    }

    const skills = ['HTML5 & CSS3', 'JavaScript', 'React & Vite', 'Tailwind CSS', 'Git & GitHub', 'Node.js']

    const projects = [
        {
            title: 'E-Ticaret Sitesi',
            subtitle: 'Alışveriş Prototipi',
            tags: ['React', 'Tailwind CSS', 'Node.js'],
            desc: 'Kullanıcıların ürün arayıp sepete ekleyebildiği modern bir alışveriş sitesi prototipi.',
        },
        {
            title: 'Blog Uygulaması',
            subtitle: 'Kişisel Blog',
            tags: ['HTML5', 'CSS3', 'JavaScript'],
            desc: 'Kişisel yazılarımı paylaştığım, Markdown destekleyen ve yorum yapılabilen blog platformu.',
        },
        {
            title: 'UI Kit Lab',
            subtitle: 'Tailwind CSS v4',
            tags: ['React', 'Tailwind v4', 'Vite'],
            desc: 'Bu proje – yeniden kullanılabilir UI bileşenlerinden oluşan kapsamlı bir component kütüphanesi.',
        },
    ]

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
            {/* ── HERO ── */}
            <section id="hero" aria-label="Tanıtım">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-violet-600 to-purple-700 p-8 sm:p-14 text-white">
                    {/* Dekoratif daireler */}
                    <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-violet-300/20 blur-3xl" />
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-3xl font-black">
                                EY
                            </div>
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">Esma Yıldırım</h1>
                                <p className="text-blue-100 mt-1">Web Geliştirici & Tasarımcı</p>
                            </div>
                        </div>
                        <p className="text-lg text-white/80 max-w-2xl mb-8">
                            Kullanıcı dostu ve erişilebilir web deneyimleri oluşturmaya odaklanan, modern teknolojilere meraklı bir yazılım geliştiricisiyim.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Button
                                id="hero-btn-projects"
                                variant="primary"
                                size="lg"
                                className="!bg-white !text-blue-700 hover:!bg-blue-50"
                                onClick={() => document.getElementById('projeler')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Projelerimi Gör
                            </Button>
                            <Button
                                id="hero-btn-contact"
                                variant="outline"
                                size="lg"
                                className="!border-white !text-white hover:!bg-white/20"
                                onClick={() => document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                İletişim
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HAKKIMDA ── */}
            <section id="hakkimda" aria-labelledby="hakkimda-baslik">
                <h2 id="hakkimda-baslik" className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Hakkımda</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <Card variant="shadowed" className="md:col-span-2">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                            Merhaba! Ben Esma. Web geliştirme teknolojilerine meraklı, sürekli öğrenen bir yazılım geliştiricisiyim.
                            HTML/CSS'den React'e, vanilla JavaScript'ten Tailwind CSS'e kadar geniş bir yelpazede deneyim edindim.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mt-4">
                            Kullanıcı deneyimini ön planda tutan, erişilebilir ve performanslı arayüzler oluşturmayı tutkuyla benimsiyorum.
                            Modern web standartlarını ve en iyi pratikleri takip ediyorum.
                        </p>
                    </Card>

                    <Card variant="bordered">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-4">Kullandığım Teknolojiler</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </Card>
                </div>
            </section>

            {/* ── PROJELER ── */}
            <section id="projeler" aria-labelledby="projeler-baslik">
                <h2 id="projeler-baslik" className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Projelerim</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <Card
                            key={project.title}
                            variant="shadowed"
                            title={project.title}
                            subtitle={project.subtitle}
                            footer={
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            }
                        >
                            {project.desc}
                        </Card>
                    ))}
                </div>
            </section>

            {/* ── İLETİŞİM ── */}
            <section id="iletisim" aria-labelledby="iletisim-baslik">
                <h2 id="iletisim-baslik" className="text-3xl font-bold text-gray-900 dark:text-white mb-8">İletişim</h2>
                <Card variant="shadowed" className="max-w-xl">
                    {submitted ? (
                        <Alert variant="success" title="Mesajınız alındı!">
                            En kısa sürede size geri dönüş yapacağım. Teşekkür ederim!
                        </Alert>
                    ) : (
                        <form id="iletisim-form" noValidate onSubmit={handleSubmit} className="space-y-4">
                            <Input
                                id="form-name"
                                label="Ad Soyad"
                                placeholder="Adınızı girin"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                error={errors.name}
                                required
                            />
                            <Input
                                id="form-email"
                                label="E-posta"
                                type="email"
                                placeholder="ornek@mail.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                error={errors.email}
                                required
                            />
                            <Input
                                id="form-message"
                                label="Mesajınız"
                                placeholder="Mesajınızı buraya yazın..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                error={errors.message}
                                required
                            />
                            <Button id="form-submit" type="submit" variant="primary" className="w-full">
                                Gönder
                            </Button>
                        </form>
                    )}
                </Card>
            </section>
        </div>
    )
}
