import DaiBalance from '@/modules/dai/components/DaiBalanceDisplay';
import { Layout } from '@/modules/layout/components/Layout';

export default function Home() {
  return (
    <Layout>
      <main>
        <div className="page-content">
          <div className="title">
            <h1>Web3 FrontEnd</h1>
            <div className="subtitle">Your homepage to access web3 features</div>
          </div>

          <DaiBalance />
        </div>
      </main>
      <style jsx>{`
        .title {
          text-align: center;
          margin-bottom: 60px;
          padding: 15px;
        }

        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .balances {
          margin-top: 60px;
        }
      `}</style>
    </Layout>
  );
}
