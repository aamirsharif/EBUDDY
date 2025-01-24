# Turbo Monorepo Project

This project is a **Turborepo-based monorepo** that contains two applications:

- **Frontend**: A Next.js app located in `apps/frontend-repo`.
- **Backend**: A Node.js app located in `apps/backend-repo`.

---

## **Setup Instructions**

### **1. Install Root level dependencies**
 ```
 cd 
 ```
 ```
 npm i
 ```

### **2. Install frontend repo dependencies**
 ```
 cd apps/frontend-repo
 ```
 ```
 npm i
 ```

### **3. Install backend repo dependencies**
 ```
 cd apps/backkend-repo
 ```
 ```
 npm i
 ```

### **4. Start project**
 ```
 npm run dev
```

**NOTE: run project on root level**

# Secrets and Envs

## Add serviceAccountKey file 
  - create a serviceAccountKey.json file and add this content
  ```
  {
    "type": FILL_ME
    "project_id": FILL_ME,
    "private_key_id": FILL_ME,
    "private_key": FILL_ME,
    "client_email": FILL_ME,
    "client_id": FILL_ME,
    "auth_uri": FILL_ME,
    "token_uri": FILL_ME,
    "auth_provider_x509_cert_url": FILL_ME,
    "client_x509_cert_url": FILL_ME,
    "universe_domain": FILL_ME
  }
  ```

