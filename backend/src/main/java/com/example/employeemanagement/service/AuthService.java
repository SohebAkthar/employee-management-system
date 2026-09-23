package com.example.employeemanagement.service;

import com.example.employeemanagement.dto.AuthResponse;
import com.example.employeemanagement.dto.LoginRequest;
import com.example.employeemanagement.dto.RegisterRequest;
import com.example.employeemanagement.entity.User;
import com.example.employeemanagement.repository.UserRepository;
import com.example.employeemanagement.security.JwtService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final JwtService jwtService;

    private final BCryptPasswordEncoder encoder =
            new BCryptPasswordEncoder();

    public AuthService(
            UserRepository userRepository,
            JwtService jwtService) {

        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }

    public String register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            return "Email already registered";
        }

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(encoder.encode(request.getPassword()));
        user.setRole("USER");

        userRepository.save(user);

        return "Registration successful";
    }

    public AuthResponse login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("Invalid email"));

        if (!encoder.matches(
                request.getPassword(),
                user.getPassword())) {

            throw new RuntimeException("Invalid password");
        }

        String token = jwtService.generateToken(
                user.getEmail(),
                user.getRole()
        );

       AuthResponse response = new AuthResponse();

        response.setToken(token);
        response.setName(user.getName());
        response.setEmail(user.getEmail());
        response.setRole(user.getRole());

return response;
    }
}