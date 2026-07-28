import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display, Alex_Brush } from 'next/font/google';
import { getMessages, getLocale } from 'next-intl/server';
import { ThemeProvider, I18nProvider, SmoothScrollProvider } from '@/providers';

import '@/styles/globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

const signature = Alex_Brush({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-signature',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: 'Rakibul Hasan Rakib | AI & Web Development Expert',
        template: '%s | Rakibul Hasan Rakib',
    },
    description: 'Rakibul Hasan Rakib - AI and Web Development Expert specializing in Machine Learning, Full Stack Development, and innovative technical solutions. Explore my portfolio of cutting-edge projects.',
    keywords: ['Rakibul Hasan Rakib', 'AI Engineer', 'Web Developer', 'Machine Learning', 'Full Stack Developer', 'React', 'Next.js', 'Python', 'TensorFlow', 'Portfolio', 'Bangladesh', 'Web Design', 'AI Development'],
    authors: [{ name: 'Rakibul Hasan Rakib' }],
    creator: 'Rakibul Hasan Rakib',
    metadataBase: new URL('https://rakibulhasan.live'),
    verification: {
        google: 'google6dff2d69354829b0',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://rakibulhasan.live',
        title: 'Rakibul Hasan Rakib | AI & Web Development Expert',
        description: 'AI and Web Development Expert specializing in Machine Learning, Full Stack Development, and innovative technical solutions.',
        siteName: 'Rakibul Hasan Rakib Portfolio',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Rakibul Hasan Rakib - AI & Web Development Expert',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Rakibul Hasan Rakib | AI & Web Development Expert',
        description: 'AI and Web Development Expert specializing in Machine Learning, Full Stack Development, and innovative technical solutions.',
        creator: '@rakibulhasanrakib',
        images: ['/og-image.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: '/icon.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
        ],
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
    ],
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
};

import { ThemeAwareClickSpark } from '@/components/ui/ThemeAwareClickSpark';
import { ConditionalNavigation } from '@/components/layout/ConditionalNavigation';
import { ArcPreloaderWrapper } from '@/components/layout/ArcPreloaderWrapper';
import { ChatBot } from '@/components/layout/ChatBot';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
            <body className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} ${signature.variable} font-sans relative`}>
                <ThemeProvider>
                    <I18nProvider locale={locale} messages={messages}>
                        <SmoothScrollProvider>
                            <ThemeAwareClickSpark>
                                <ArcPreloaderWrapper>
                                    <ConditionalNavigation>
                                        {children}
                                    </ConditionalNavigation>
                                </ArcPreloaderWrapper>
                                <ChatBot headless />
                            </ThemeAwareClickSpark>
                        </SmoothScrollProvider>
                    </I18nProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}

