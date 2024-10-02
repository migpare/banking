import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';

const Home = () => {
  const loggedIn = { firstName: 'Miguel' };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            account={1}
            totalBanks={1}
            totalCurrentBalance={1250.00}
          />
        </header>
        </div>
        </section>
  )
}

export default Home