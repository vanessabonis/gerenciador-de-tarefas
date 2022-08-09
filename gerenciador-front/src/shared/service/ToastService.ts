import { ToastSeverity } from 'primevue/api';
import { app } from '@/main';

const lifeTime = 5000;

export default class ToastService {

  info(title: string, body: string): void {
    app.config.globalProperties.$toast.add({severity: ToastSeverity.INFO, summary: title, detail: body, life: lifeTime});
  }

  error(title: string, body: string): void {
    app.config.globalProperties.$toast.add({severity: ToastSeverity.ERROR, summary: title, detail: body, life: lifeTime});
  }

  success(title: string, body: string): void {
    app.config.globalProperties.$toast.add({severity: ToastSeverity.SUCCESS, summary: title, detail: body, life: lifeTime});
  }

  warn(title: string, body: string): void {
    app.config.globalProperties.$toast.add({severity: ToastSeverity.WARN, summary: title, detail: body, life: lifeTime});
  }
}
