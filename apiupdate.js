// api/update.js
let globalData = { items: {} };

export default function handler(req, res) {
  if (req.method === 'POST') {
    globalData = JSON.parse(req.body); // Actualiza los datos
    return res.status(200).json({ success: true });
  }
  
  if (req.method === 'GET') {
    return res.status(200).json(globalData); // Devuelve los datos a la web
  }
}