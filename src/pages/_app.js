import Layout from '@/components/shared/Layout';
import SpinnerLayout from '@/components/shared/SpinnerLayout';
import { Provider } from '@/context';
import '@/styles/base.scss';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    display: 'swap',
});

export default function App({ Component, pageProps }) {
    return (
        <section className={`${roboto.className}`}>
            <Provider>
                <Layout>
                    <SpinnerLayout>
                        <Component {...pageProps} />
                    </SpinnerLayout>
                </Layout>
            </Provider>
        </section>
    );
}
