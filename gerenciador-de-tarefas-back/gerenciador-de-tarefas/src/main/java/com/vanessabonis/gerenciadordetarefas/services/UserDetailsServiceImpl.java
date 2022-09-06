//package com.vanessabonis.gerenciadordetarefas.services;
//
//import com.vanessabonis.gerenciadordetarefas.models.Usuario;
//import com.vanessabonis.gerenciadordetarefas.repositories.UsuarioRepository;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//@Service
//public class UserDetailsServiceImpl implements UserDetailsService {
//
//    final UsuarioRepository usuarioRepository;
//
//    public UserDetailsServiceImpl(UsuarioRepository usuarioRepository) {
//        this.usuarioRepository = usuarioRepository;
//    }
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//
//        Usuario usuario = usuarioRepository.findByUserName(username)
//                .orElseThrow(() -> new UsernameNotFoundException("Usuario não encontrado com username: " + username));
//        return usuario;
//    }
//}
