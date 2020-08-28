import encondeClientIdAndSecretToBase64 from "../../../services/encondeClientIdAndSecretToBase64";

const Ok = 200;
const MethodNotAllowed = 405;

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(Ok).json({ authCode: encondeClientIdAndSecretToBase64() });
      break;

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(MethodNotAllowed).end(`Method ${method} Not Allowed`);
      break;
  }
};
