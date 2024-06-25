// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';
import { getDropdownMenuPlacement } from 'react-bootstrap/esm/DropdownMenu';

function TradingChart(props) {
  const container = useRef();
  
  useEffect(
    () => {
      const script = document.createElement("script");
      const symbol = props.symbol;
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "` + symbol + `",
          "interval": "W",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": false,
          "gridColor": "rgba(182, 182, 182, 0.06)",
          "hide_top_toolbar": true,
          "details": true,
          "hide_legend": false,
          "save_image": false,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
  );
}

export default memo(TradingChart);