import Layout from './layout'
import { PageProps } from '../.next/types/app/layout';

export default function App({Component, PageProps}) {
    return (
        <Layout>
        <Component {...PageProps} />
        </Layout>
    );
}