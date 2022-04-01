module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ae13ce408af0688d56c9eff0cc3f2dc6'),
  },
});
