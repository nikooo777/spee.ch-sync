const SLACK_WEB_HOOK =  'https://hooks.slack.com/services/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';
const SLACK_ERROR_CHANNEL = '#dev_speech-errors';
const SLACK_INFO_CHANNEL = null;

const winstonSlackWebHook = require('winston-slack-webhook').SlackWebHook;

module.exports = (winston) => {
  // add a transport for errors
  if (SLACK_ERROR_CHANNEL) {
    winston.add(winstonSlackWebHook, {
      name      : 'slack-errors-transport',
      level     : 'error',
      webhookUrl: SLACK_WEB_HOOK,
      channel   : SLACK_ERROR_CHANNEL,
      username  : 'speech_sync',
      iconEmoji : ':face_with_head_bandage:',
    });
  }
  if (SLACK_INFO_CHANNEL) {
    winston.add(winstonSlackWebHook, {
      name      : 'slack-info-transport',
      level     : 'info',
      webhookUrl: SLACK_WEB_HOOK,
      channel   : SLACK_INFO_CHANNEL,
      username  : 'speech_sync',
      iconEmoji : ':nerd_face:',
    });
  }
  // send test message
  winston.error('Testing slack error logging... slack logging is online.');
  winston.info('Testing slack info logging... slack logging is online.');
};
