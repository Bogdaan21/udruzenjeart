export const SuccessPopup: React.FC<{ message: string; onClose: () => void }> = ({ message, onClose }) => {
  return (
    <div className="popup-overlay" style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    }}>
      <div className="popup-content" style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '400px',
        textAlign: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h2>✅ {message}</h2>
        <p>
          {message === "Application successfully submitted!"
            ? "For accommodation, we recommend Hotel Princess, Bar. You can make your reservation directly at reception or through the hotel website."
            : "Za smještaj preporučujemo Hotel Princess u Baru. Možete rezervisati sobu direktno na recepciji ili putem zvaničnog sajta hotela."}
        </p>
        <p>
          <a href="https://www.hotelprincess.me/" target="_blank" rel="noopener noreferrer">
            https://www.hotelprincess.me/
          </a>
        </p>
        <button onClick={onClose} style={{
          marginTop: '15px',
          padding: '8px 16px',
          borderRadius: '4px',
          border: 'none',
          backgroundColor: '#0070f3',
          color: '#fff',
          cursor: 'pointer'
        }}>
          OK
        </button>
      </div>
    </div>
  );
};