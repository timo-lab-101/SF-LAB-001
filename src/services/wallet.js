import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Trade from './pages/Trade';
import Presale from './pages/Presale';
import Market from './pages/Market';
import Staking from './pages/Staking';
import Game from './pages/Game';
import ComingSoon from './pages/ComingSoon';
import { connectWallet } from './services/wallet'; // 从 wallet.js 导入 connectWallet

function App() {
  // 管理钱包连接状态的 state
  const [provider, setProvider] = useState(null);

  // 处理连接钱包的函数
  const handleConnectWallet = async () => {
    const connectedProvider = await connectWallet();
    setProvider(connectedProvider);
  };

  return (
    <Router>
      <div>
        {/* 添加一个按钮用于连接钱包 */}
        <button onClick={handleConnectWallet}>
          {provider ? "Wallet Connected" : "Connect Wallet"}
        </button>

        {/* 配置路由 */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/trade" component={Trade} />
          <Route path="/presale" component={Presale} />
          <Route path="/market" component={Market} />
          <Route path="/staking" component={Staking} />
          <Route path="/game" component={Game} />
          <Route path="/coming-soon" component={ComingSoon} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;