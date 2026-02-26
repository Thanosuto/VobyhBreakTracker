let cache = { total: 0, avgRebirth: 0, mutations: {} };

export default function handler(req, res) {
  if (req.method === 'POST') {
    cache = JSON.parse(req.body);
    return res.status(200).send("OK");
  }
  res.status(200).json(cache);
}
