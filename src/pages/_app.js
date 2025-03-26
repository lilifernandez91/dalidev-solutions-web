import Layout from '@/components/shared/Layout';
import SpinnerLayout from '@/components/shared/SpinnerLayout';
import { Provider } from '@/context';
import '@/styles/base.scss';
import { Roboto_Condensed } from 'next/font/google';

const robotoCondensed = Roboto_Condensed({
    subsets: ['latin'],
    weights: ['300', '400', '500', '600'],
    display: 'swap',
});

export default function App({ Component, pageProps }) {
    return (
        <section className={`${robotoCondensed.className}`}>
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
